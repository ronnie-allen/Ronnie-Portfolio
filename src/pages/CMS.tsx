import { useState } from "react";
import { useContent, Skill, Project, Blog } from "../context/ContentContext";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export const CMS = () => {
    const { content, addSkill, updateSkill, deleteSkill, addProject, updateProject, deleteProject, addBlog, updateBlog, deleteBlog, exportData } = useContent();
    const [activeTab, setActiveTab] = useState<"skills" | "projects" | "blogs">("skills");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const openAddModal = () => {
        setEditingItem(null);
        setEditingIndex(null);
        setIsModalOpen(true);
    };

    const openEditModal = (item: any, index: number) => {
        setEditingItem(item);
        setEditingIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
        setEditingIndex(null);
    };

    const handleDelete = (index: number) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            if (activeTab === "skills") deleteSkill(index);
            if (activeTab === "projects") deleteProject(index);
            if (activeTab === "blogs") deleteBlog(index);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 font-inter">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <Link to="/" className="flex items-center text-gray-400 hover:text-white transition">
                        <FaArrowLeft className="mr-2" /> Back to Portfolio
                    </Link>
                    <h1 className="text-3xl font-bold text-red-500">Content Management System</h1>
                    <button
                        onClick={exportData}
                        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                        <FaDownload className="mr-2" /> Export JSON
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-8 border-b border-gray-800">
                    {(["skills", "projects", "blogs"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 px-4 capitalize font-medium transition ${activeTab === tab
                                    ? "text-red-500 border-b-2 border-red-500"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content List */}
                <div className="bg-[#121212] rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold capitalize">{activeTab} List</h2>
                        <button
                            onClick={openAddModal}
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            <FaPlus className="mr-2" /> Add New
                        </button>
                    </div>

                    <div className="space-y-4">
                        {activeTab === "skills" && content.skills.map((skill, index) => (
                            <ListItem
                                key={index}
                                title={skill.name}
                                subtitle={skill.category}
                                image={skill.logo}
                                onEdit={() => openEditModal(skill, index)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                        {activeTab === "projects" && content.projects.map((project, index) => (
                            <ListItem
                                key={index}
                                title={project.name}
                                subtitle={project.description.substring(0, 100) + "..."}
                                image={project.image}
                                onEdit={() => openEditModal(project, index)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                        {activeTab === "blogs" && content.blogs.map((blog, index) => (
                            <ListItem
                                key={index}
                                title={blog.title}
                                subtitle={blog.url}
                                image={blog.image}
                                onEdit={() => openEditModal(blog, index)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    type={activeTab}
                    initialData={editingItem}
                    onSubmit={(data) => {
                        if (activeTab === "skills") {
                            editingIndex !== null ? updateSkill(editingIndex, data as Skill) : addSkill(data as Skill);
                        } else if (activeTab === "projects") {
                            editingIndex !== null ? updateProject(editingIndex, data as Project) : addProject(data as Project);
                        } else if (activeTab === "blogs") {
                            editingIndex !== null ? updateBlog(editingIndex, data as Blog) : addBlog(data as Blog);
                        }
                        closeModal();
                    }}
                />
            )}
        </div>
    );
};

const ListItem = ({ title, subtitle, image, onEdit, onDelete }: any) => (
    <div className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-lg hover:bg-[#252525] transition">
        <div className="flex items-center space-x-4">
            {image && <img src={image} alt={title} className="w-10 h-10 object-contain rounded" />}
            <div>
                <h3 className="font-medium text-white">{title}</h3>
                <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
        </div>
        <div className="flex space-x-2">
            <button onClick={onEdit} className="p-2 text-blue-400 hover:text-blue-300 transition">
                <FaEdit />
            </button>
            <button onClick={onDelete} className="p-2 text-red-400 hover:text-red-300 transition">
                <FaTrash />
            </button>
        </div>
    </div>
);

const Modal = ({ isOpen, onClose, type, initialData, onSubmit }: any) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data: any = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        // Handle number conversion for proficiency
        if (data.proficiency) data.proficiency = Number(data.proficiency);
        onSubmit(data);
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#1e1e1e] p-8 rounded-xl w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
                <h2 className="text-2xl font-bold mb-6 capitalize">{initialData ? "Edit" : "Add"} {type.slice(0, -1)}</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {type === "skills" && (
                        <>
                            <Input name="name" label="Skill Name" defaultValue={initialData?.name} required />
                            <Input name="logo" label="Logo URL" defaultValue={initialData?.logo} required />
                            <Select name="category" label="Category" defaultValue={initialData?.category} options={["Frontend", "Backend", "Mobile", "AI/ML", "AI Frameworks", "Tools"]} />
                            <Input name="proficiency" label="Proficiency (0-100)" type="number" defaultValue={initialData?.proficiency} required />
                        </>
                    )}
                    {type === "projects" && (
                        <>
                            <Input name="name" label="Project Name" defaultValue={initialData?.name} required />
                            <Input name="image" label="Image URL/Path" defaultValue={initialData?.image} />
                            <Input name="githubUrl" label="GitHub URL" defaultValue={initialData?.githubUrl} required />
                            <TextArea name="description" label="Description" defaultValue={initialData?.description} required />
                        </>
                    )}
                    {type === "blogs" && (
                        <>
                            <Input name="title" label="Blog Title" defaultValue={initialData?.title} required />
                            <Input name="url" label="Blog URL" defaultValue={initialData?.url} required />
                            <Input name="image" label="Image URL" defaultValue={initialData?.image} required />
                        </>
                    )}

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition mt-4">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

const Input = ({ label, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <input {...props} className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500" />
    </div>
);

const TextArea = ({ label, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <textarea {...props} rows={4} className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500" />
    </div>
);

const Select = ({ label, options, ...props }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <select {...props} className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500">
            {options.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);
