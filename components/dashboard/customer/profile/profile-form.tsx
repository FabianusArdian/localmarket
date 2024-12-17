"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useUserStore } from "@/lib/stores/user-store";

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
});

export function ProfileForm() {
  const { currentUser, updateUser } = useUserStore();
  const { toast } = useToast();

  if (!currentUser) return null;

  return (
    <Formik
      initialValues={{
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone || "",
      }}
      validationSchema={profileSchema}
      onSubmit={async (values) => {
        try {
          updateUser(currentUser.id, values);
          toast({
            title: "Profile updated",
            description: "Your profile has been updated successfully.",
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to update profile. Please try again.",
          });
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Field
              as={Input}
              name="name"
              placeholder="Enter your full name"
            />
            {errors.name && touched.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Email Address</Label>
            <Field
              as={Input}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && touched.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Field
              as={Input}
              name="phone"
              placeholder="Enter your phone number"
            />
            {errors.phone && touched.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}