/* eslint-disable react/no-unescaped-entities */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { ServiceContactForm } from '@/components/service-contact-form';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`${DATA.name}`}
                />
              </h1>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <div className="flex gap-2">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Mail
                      className="text-gray-500 dark:text-white border p-2 rounded-full hover:rotate-[10deg] hover:scale-110 transition-transform"
                      size={36}
                    />
                  </Link>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Link href={`tel:${DATA.contact.tel}`}>
                    <Phone
                      className="text-gray-500 dark:text-white border p-2 rounded-full hover:rotate-[10deg] hover:scale-110 transition-transform"
                      size={36}
                    />
                  </Link>
                </BlurFade>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Su di me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="chi-aiuto">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">{DATA.targetAudience.title}</h2>
        </BlurFade>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <p dangerouslySetInnerHTML={{ __html: DATA.targetAudience.intro }} className="m-0" />
            <ul className="list-disc pl-6 space-y-1">
              {DATA.targetAudience.points.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Educazione</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Cosa Faccio: I Miei Servizi Principali</h2>
          </BlurFade>

          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert space-y-4 mt-2">
            {DATA.services.items.map((service, id) => (
              <BlurFade key={service.slug} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <h3 className="inline text-sm font-bold">{service.title}</h3>
                {' '}
                <p className="inline m-0" dangerouslySetInnerHTML={{ __html: service.description }} />

                {' '}
                <Link href={service.slug} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap">
                  [Approfondisci]
                </Link>
              </BlurFade>
            ))}
          </div>

        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Progetti
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Dai un'occhiata ai progetti
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ho lavorato su una varietà di progetti, da semplici siti web a
                  complesse applicazioni web. Eccone alcuni.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="perche-scegliermi">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <h2 className="text-xl font-bold">{DATA.whyMe.title}</h2>
        </BlurFade>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <p dangerouslySetInnerHTML={{ __html: DATA.whyMe.intro }} />
            <ul className="list-disc pl-6 space-y-1">
              {DATA.whyMe.points.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact" className="mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ServiceContactForm
            serviceName="Homepage Generale"
            formTitle="Contattami e Parliamo!"
            formDescription="Se hai un progetto in mente o vuoi sapere di più sui servizi che posso offrirti, compila il modulo qui sotto e ti risponderò al più presto."
            submitButtonText="Invia Messaggio"
          />
        </BlurFade>
      </section>
    </main>
  );
}
