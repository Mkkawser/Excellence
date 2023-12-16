import axios from "axios";
import React from "react";

const Update_profile = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", e.target.elements.avatar.files[0]);
    formData.append("profile_id", localStorage.getItem("user_id"));

    try {
      // http://localhost:5000/api/profile
      const response = await fetch(
        "https://excellence-six.vercel.app/api/profile",
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("File uploaded successfully!");
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="put" encType="multipart/form-data">
        <input type="file" name="avatar" placeholder="File" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update_profile;
