import { createContext, useContext, useState, ReactNode } from 'react';
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
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<ContentData>(initialContent);

    const updateContent = (newContent: ContentData) => {
        setContent(newContent);
    };

    // Helper functions for Skills
    const addSkill = (skill: Skill) => {
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

    return (
        <ContentContext.Provider value={{
            content,
            updateContent,
            addSkill, updateSkill, deleteSkill,
            addProject, updateProject, deleteProject,
            addBlog, updateBlog, deleteBlog,
            exportData
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
