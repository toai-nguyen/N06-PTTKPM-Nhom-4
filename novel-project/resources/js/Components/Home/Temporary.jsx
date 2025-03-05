                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="genshin-font text-2xl font-bold mb-6">Create New Novel</h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <TextInput
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full"
                                required
                            />
                        </div>

                        {/* Description Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        {/* Cover Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Image
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    id="coverImage"
                                    required
                                />
                                <label
                                    htmlFor="coverImage"
                                    className="px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
                                >
                                    Choose File
                                </label>
                                {previewImage && (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="h-20 w-20 object-cover rounded"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Content File Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Content File
                            </label>
                            <input
                                type="file"
                                accept=".txt,.doc,.docx,.pdf"
                                onChange={handleContentUpload}
                                className="w-full"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <SecondaryButton type="submit">
                                Create Novel
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
