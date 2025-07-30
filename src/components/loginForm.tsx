"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import styles from "./loginForm.module.scss";

const schema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "Phone must start with 09 and be 11 digits"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const json = await res.json();
      const user = json.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <Input
          label="Phone Number"
          placeholder="09123456789"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
