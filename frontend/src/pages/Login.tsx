import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { LoginRequest } from "../types/auth";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Box,
  Text,
  Center,
  LoadingOverlay,
} from "@mantine/core";

export function Login() {
  const { login, loading, error, user, token } = useAuth();
  const [form, setForm] = useState<LoginRequest>({ login: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit вызван, форма:", form); // <- проверка
    await login(form);
  };

  return (
    <Center style={{ width: "100vw", height: "100vh", background: "#f5f5f5" }}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        style={{ width: "100%", maxWidth: 400, position: "relative" }}
      >
        <LoadingOverlay visible={loading} />
        <Title order={2} mb="xl">
          Welcome Back
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Login"
            placeholder="Enter your login"
            name="login"
            value={form.login}
            onChange={handleChange}
            required
            mb="sm"
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            mb="md"
          />
          {error && (
            <Text color="red" size="sm" mb="md">
              {error}
            </Text>
          )}
          <Button type="submit" fullWidth>
            Sign In
          </Button>
        </form>
      </Paper>
    </Center>
  );
}
