import {FC, useState } from "react";
import { createBlog } from "service/backend";

interface InputFormProps {
  reload: () => void
}

export const InputForm: FC<InputFormProps> = ({ reload }) => {
  const [title, setTitle] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();

  const onSubmit = () => {
    createBlog({ title, content });
    reload()
  };

  return (
    <div className="w-1/2 flex flex-col rounded items-center justify-center bg-gray-300">
      <label htmlFor="title" className="p-4 m-2 font-bold">
        Title
      </label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="h-10 w-80 rounded"
      />
      <label htmlFor="content" className="p-4 m-2 font-bold">
        Content
      </label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-80 rounded mt-2 mb-8 h-40"
      />
      <button type="submit" className="btn w-44 h-10 mb-8" onClick={onSubmit}>
        Add Blog
      </button>
    </div>
  );
};
