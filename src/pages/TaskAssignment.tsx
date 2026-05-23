import { useState } from "react";

type Status =
  | "assigned"
  | "in-progress"
  | "completed"
  | "overdue";

interface User {
  id: number;
  name: string;
  email: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya@example.com",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@example.com",
  },
  {
    id: 4,
    name: "Ananya Singh",
    email: "ananya@example.com",
  },
];

export default function TaskAssignment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    to: "",
    title: "",
    description: "",
    from: "Divyansh",
    deadline: "",
    status: "assigned" as Status,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted Task:", formData);

    setIsModalOpen(false);

    setFormData({
      to: "",
      title: "",
      description: "",
      from: "Divyansh",
      deadline: "",
      status: "assigned",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Meeting Task Manager
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
          >
            Assign Task
          </button>
        </div>

        {/* Mock Tasks */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  UI Improvements
                </h2>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                  Assigned
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Improve dashboard responsiveness and spacing.
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-500">
                <p>
                  <span className="font-medium text-gray-700">To:</span>{" "}
                  Aarav Sharma
                </p>

                <p>
                  <span className="font-medium text-gray-700">From:</span>{" "}
                  Divyansh
                </p>

                <p>
                  <span className="font-medium text-gray-700">
                    Deadline:
                  </span>{" "}
                  2026-05-30
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Assign New Task
              </h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {/* To */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  To
                </label>

                <select
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                >
                  <option value="">Select Team Member</option>

                  {mockUsers.map((user) => (
                    <option
                      key={user.id}
                      value={user.name}
                    >
                      {user.name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter task description"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* From */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  From
                </label>

                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 outline-none"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Deadline
                </label>

                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                >
                  <option value="assigned">Assigned</option>
                  <option value="in-progress">
                    In Progress
                  </option>
                  <option value="completed">
                    Completed
                  </option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-gray-300 px-5 py-3 font-medium"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:opacity-90"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}