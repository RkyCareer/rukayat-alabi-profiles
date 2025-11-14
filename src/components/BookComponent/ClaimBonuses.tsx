/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface Props {
  onClose: () => void;
}

const MAX_IMAGE_SIZE_MB = 10;
const MAX_VIDEO_SIZE_MB = 15;

export function ClaimBonuses({ onClose }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateFile = (f: File) => {
    const sizeMB = f.size / (1024 * 1024);

    if (f.type.startsWith("image/") && sizeMB > MAX_IMAGE_SIZE_MB) {
      return `Images must be ≤ ${MAX_IMAGE_SIZE_MB} MB`;
    }
    if (f.type.startsWith("video/") && sizeMB > MAX_VIDEO_SIZE_MB) {
      return `Videos must be ≤ ${MAX_VIDEO_SIZE_MB} MB`;
    }
    return null;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    const error = validateFile(selected);
    if (error) return alert(error);

    setFile(selected);

    if (selected.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  const handleSelectClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please upload an image or video");

    const error = validateFile(file);
    if (error) return alert(error);

    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {
      const res = await fetch("/api/claim-bonuses", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        setFile(null);
        setPreview(null);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center text-slate-900">
          Upload Proof
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Upload Box */}
          <div className="flex flex-col items-center space-y-3">
            <label className="font-medium text-slate-700">
              Upload Image or Video
            </label>

            <div
              className="w-36 h-36 rounded-full bg-amber-50 border-2 border-dashed border-amber-400 flex items-center justify-center cursor-pointer hover:bg-amber-100 transition"
              onClick={handleSelectClick}
            >
              {/* {preview ? (
                <Image
                  src={preview}
                  className="w-full h-full object-cover rounded-full"
                  alt="upload image"
                  width={400}
                  height={300}
                />
              ) : (
                <div className="flex flex-col items-center text-amber-700">
                  <Upload className="w-8 h-8 mb-2" />
                  <p className="text-xs">Click to upload</p>
                </div>
              )} */}
              {preview ? (
  file?.type.startsWith("video/") ? (
    <video
      src={preview}
      className="w-full h-full object-cover rounded-full"
      controls
    />
  ) : (
      <Image
                  src={preview}
                  className="w-full h-full object-cover rounded-full"
                  alt="upload image"
                  width={400}
                  height={300}
                />
  )
) : (
  <div className="flex flex-col items-center text-amber-700">
    <Upload className="w-8 h-8 mb-2" />
    <p className="text-xs">Click to upload</p>
  </div>
)}


            </div>

            {/* Hidden input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileSelect}
            />

            <p className="text-sm text-slate-500 text-center">
              Max: {MAX_IMAGE_SIZE_MB}MB image • {MAX_VIDEO_SIZE_MB}MB video
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white p-4 rounded-lg hover:bg-amber-700 disabled:opacity-60 font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ Submission successful!
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-600 font-semibold text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
