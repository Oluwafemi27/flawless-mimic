import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Toaster, toast } from "sonner";

const PASSWORD = "5251";
// Secret page with password protection

export const Route = createFileRoute("/secret")({
  component: SecretPage,
});

interface UserEntry {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

function SecretPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<UserEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      console.log("Fetching users...");
      const { data, error } = await supabase
        .from("users_collection")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error:", error);
        throw error;
      }

      console.log("Users fetched:", data);
      setUsers(data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch users";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
      toast.success("Access granted!");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const userData = {
        name: name.trim(),
        email: email.trim(),
      };

      console.log("Submitting user:", userData);

      const { data, error } = await supabase
        .from("users_collection")
        .insert([userData])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("User added successfully:", data);
      toast.success("User added successfully!");
      setName("");
      setEmail("");
      await fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to add user";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
        <Card className="w-full max-w-md border-2 border-slate-700 bg-slate-800 p-8 shadow-lg">
          <h1 className="mb-2 text-center text-3xl font-bold text-white">
            Secret Access
          </h1>
          <p className="mb-6 text-center text-sm text-slate-300">
            Enter password to continue
          </p>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Unlock
            </Button>
          </form>
        </Card>
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold text-white">User Collection</h1>
        <p className="mb-8 text-slate-300">
          Collect and manage user emails and names
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-2 border-slate-700 bg-slate-800 p-6">
            <h2 className="mb-6 text-2xl font-bold text-white">Add User</h2>
            <form onSubmit={handleSubmitUser} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter user name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter user email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? "Adding..." : "Add User"}
              </Button>
            </form>
          </Card>

          <Card className="border-2 border-slate-700 bg-slate-800 p-6">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Users ({users.length})
            </h2>
            <div className="max-h-96 space-y-3 overflow-y-auto">
              {isLoading ? (
                <p className="text-center text-slate-400">Loading...</p>
              ) : users.length === 0 ? (
                <p className="text-center text-slate-400">
                  No users added yet
                </p>
              ) : (
                users.map((user) => (
                  <div
                    key={user.id}
                    className="rounded-lg border border-slate-600 bg-slate-700 p-3"
                  >
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-slate-300">{user.email}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
