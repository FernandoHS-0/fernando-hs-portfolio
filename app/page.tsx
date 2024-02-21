import AboutPage from "@/components/About/AboutPage";
import HomePage from "@/components/Home/HomePage";
import ContactPage from "@/components/Contact/ContactPage";
import MainLayout from "@/components/layout/MainLayout";
import ProjectsPage from "@/components/Projects/ProjectsPage";

export default function Home() {
  return (
    <MainLayout>
      {/*
      <HomePage />
      <AboutPage />
      <ContactPage />
      
      */}
      <ProjectsPage />
    </MainLayout>
  );
}
