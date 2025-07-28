import { create } from "zustand";

export interface Teacher {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  contact: string;
  address: string;
  subject: string;
}

interface TeacherStore {
  teachers: Teacher[];
  setTeachers: (teachers: Teacher[]) => void;
  createTeacher: (
    newTeacher: Omit<Teacher, "_id">
  ) => Promise<{ success: boolean; message: string }>;
  fetchTeacher: () => Promise<void>;
  deleteTeacher: (
    pid: string
  ) => Promise<{ success: boolean; message: string }>;
  updateTeacher: (
    pid: string,
    updateTeacherData: Partial<Teacher>
  ) => Promise<{ success: boolean; message: string }>;
}

export const useTeacherStore = create<TeacherStore>((set) => ({
  teachers: [],
  setTeachers: (teachers) => set({ teachers }),
  createTeacher: async (newTeacher) => {
    /// todo validation here
    /// return { success: false, message: "please fill in all forms"};

    const res = await fetch(`${import.meta.env.BACKEND_BASEURL}/api/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeacher),
    });

    ////
    /// test
    ///

    const data = await res.json();

    set((state) => ({ teachers: [...state.teachers, data.data] }));
    return { success: true, message: "Teacher data created successfully" };
  },
  fetchTeacher: async () => {},
  deleteTeacher: async (pid) => {
    pid;
    return { success: true, message: "none" };
  },
  updateTeacher: async (pid) => {
    pid;
    return { success: true, message: "none" };
  },
}));
