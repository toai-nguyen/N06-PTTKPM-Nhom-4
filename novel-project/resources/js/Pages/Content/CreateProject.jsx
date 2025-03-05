import HomeLayout from "@/Layouts/ParentsLayout";
import NotAuth from "@/Components/Home/NotAuth";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import Header from "@/Components/Header";

export default function CreateProject({ auth }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        coverImage: null,
        content: null
    });
    const [previewImage, setPreviewImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                coverImage: file
            }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleContentUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                content: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <HomeLayout>
            {!auth.user ? (
                <NotAuth />
            ) : (
                <Header title="Create Project" />
                
            )}
        </HomeLayout>
    );
}
