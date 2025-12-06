import React, { createContext, useContext, useState, ReactNode } from 'react';
import initialContent from '../data/content.json';

// Define types for our data
export interface Skill {
    name: string;
    logo: string;
    category: string;
    proficiency: number;
}

export interface Project {
    name: string;
    description: string;
    image: string;
    githubUrl: string;
}

export interface Blog {
    title: string;
    url: string;
    image: string;
}

interface ContentData {
    skills: Skill[];
    projects: Project[];
    blogs: Blog[];
}

interface ContentContextType {
    content: ContentData;
    updateContent: (newContent: ContentData) => void;
    addSkill: (skill: Skill) => void;
    updateSkill: (index: number, skill: Skill) => void;
    deleteSkill: (index: number) => void;
    addProject: (project: Project) => void;
    updateProject: (index: number, project: Project) => void;
    deleteProject: (index: number) => void;
    addBlog: (blog: Blog) => void;
    updateBlog: (index: number, blog: Blog) => void;
    deleteBlog: (index: number) => void;
    exportData: () => void;
    saveToProject: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<ContentData>(() => {
        const saved = localStorage.getItem('portfolio_content');
        return saved ? JSON.parse(saved) : initialContent;
    });

    React.useEffect(() => {
        localStorage.setItem('portfolio_content', JSON.stringify(content));
        console.log('Content updated and saved to localStorage:', content);
    }, [content]);

    const updateContent = (newContent: ContentData) => {
        setContent(newContent);
    };

    // Helper functions for Skills
    const addSkill = (skill: Skill) => {
        console.log('Adding skill:', skill);
        setContent(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    };

    const updateSkill = (index: number, updatedSkill: Skill) => {
        setContent(prev => {
            const newSkills = [...prev.skills];
            newSkills[index] = updatedSkill;
            return { ...prev, skills: newSkills };
        });
    };

    const deleteSkill = (index: number) => {
        setContent(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    // Helper functions for Projects
    const addProject = (project: Project) => {
        setContent(prev => ({ ...prev, projects: [...prev.projects, project] }));
    };

    const updateProject = (index: number, updatedProject: Project) => {
        setContent(prev => {
            const newProjects = [...prev.projects];
            newProjects[index] = updatedProject;
            return { ...prev, projects: newProjects };
        });
    };

    const deleteProject = (index: number) => {
        setContent(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }));
    };

    // Helper functions for Blogs
    const addBlog = (blog: Blog) => {
        setContent(prev => ({ ...prev, blogs: [...prev.blogs, blog] }));
    };

    const updateBlog = (index: number, updatedBlog: Blog) => {
        setContent(prev => {
            const newBlogs = [...prev.blogs];
            newBlogs[index] = updatedBlog;
            return { ...prev, blogs: newBlogs };
        });
    };

    const deleteBlog = (index: number) => {
        setContent(prev => ({
            ...prev,
            blogs: prev.blogs.filter((_, i) => i !== index)
        }));
    };

    const exportData = () => {
        const dataStr = JSON.stringify(content, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = 'content.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const saveToProject = async () => {
        try {
            // Check if the File System Access API is supported
            if ('showSaveFilePicker' in window) {
                const options = {
                    suggestedName: 'content.json',
                    types: [{
                        description: 'JSON File',
                        accept: { 'application/json': ['.json'] },
                    }],
                };

                // @ts-ignore - showSaveFilePicker is not yet in standard lib dom
                const handle = await window.showSaveFilePicker(options);
                const writable = await handle.createWritable();
                await writable.write(JSON.stringify(content, null, 2));
                await writable.close();
                alert('Content saved successfully! You can now commit the changes.');
            } else {
                // Fallback for browsers that don't support the API
                exportData();
                alert('Your browser does not support direct file saving. The file has been downloaded. Please replace src/data/content.json manually.');
            }
        } catch (error) {
            // Ignore abort errors (user cancelled)
            if ((error as Error).name !== 'AbortError') {
                console.error('Error saving content:', error);
                alert('Failed to save content.');
            }
        }
    };

    return (
        <ContentContext.Provider value={{
            content,
            updateContent,
            addSkill, updateSkill, deleteSkill,
            addProject, updateProject, deleteProject,
            addBlog, updateBlog, deleteBlog,
            exportData,
            saveToProject
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
