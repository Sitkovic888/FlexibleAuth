import { cn } from "@/lib/utils";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components";
import { UserLoginDto } from "@/shared/models/user-login.interface";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const useAuthObj = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginDto>();

  async function handleLogin(form: UserLoginDto) {
    const newUserLogin: UserLoginDto = {
      username: form.username,
      email: form.email,
      password: form.password,
    };
    await useAuthObj.loginUser(newUserLogin);
  }

  const usernameId = "username";
  const emailId = "email";
  const passwordId = "password";

  return (
    <div className={cn("flex flex-col gap-6 h-full", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor={emailId}>Username</Label>
                <Input
                  id={usernameId}
                  type={usernameId}
                  placeholder={usernameId}
                  required
                  {...register(usernameId, { required: true })}
                />
                {errors.email && errors.email.message}
              </div>
              <div className="grid gap-2">
                <Label htmlFor={emailId}>Email</Label>
                <Input
                  id={emailId}
                  type={emailId}
                  placeholder="email@domain.com"
                  required
                  {...register(emailId, { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor={passwordId}>Password</Label>
                </div>
                <Input
                  id={passwordId}
                  type={passwordId}
                  required
                  {...register(passwordId, { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
