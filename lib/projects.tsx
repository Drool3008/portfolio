import React from "react";
import { Clapperboard, Users, Database } from "lucide-react";

export type Project = {
  id: number;
  slug: string;
  icon: React.ReactNode;
  title: string;
  tags: string[]; // tech stack
  blurb: string; // shown on card + detail hero
  repo?: string;
  demo?: string;
  role?: string;
  timeframe?: string;
  content: React.ReactNode; // detail-page body
};

// ponytail: repo links point at the GitHub profile as placeholders.
// Replace each `repo` with the exact repository URL when you have them.
const GH = "https://github.com/Drool3008";

export const projects: Project[] = [
  {
    id: 1,
    slug: "netflix-recommendation",
    icon: <Clapperboard className="h-5 w-5" />,
    title: "Netflix Movie Recommendation",
    tags: ["R", "R Studio", "MySQL"],
    blurb:
      "Ranks shows by popularity from a dataset and recommends movies to a user based on their likes and ratings.",
    repo: GH,
    role: "Solo project",
    timeframe: "Data + R",
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            A recommendation project built in R Studio over a Netflix dataset. It
            compiles the data, ranks titles by how widely they are watched, and
            returns a recommended movie for a user based on their likes and
            ratings.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">What it does</h2>
          <ul className="list-disc list-inside text-[var(--muted-foreground)] leading-relaxed space-y-2">
            <li>Compiles a dataset in R Studio and ranks shows by most-watched.</li>
            <li>Surfaces most-watched statistics for quick exploration.</li>
            <li>Takes user input and returns a movie recommendation driven by likes and ratings.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Stack</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">R, R Studio, MySQL.</p>
        </section>
      </div>
    ),
  },
  {
    id: 2,
    slug: "collaborative-code-editor",
    icon: <Users className="h-5 w-5" />,
    title: "Collaborative Code Editor",
    tags: ["Node.js", "Socket.io", "Express.js"],
    blurb:
      "A real-time, multi-user code editor so a team can work in one project together and skip the painful post-hoc integration step.",
    repo: GH,
    role: "Solo project",
    timeframe: "Realtime web",
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            A real-time multi-user code editor where people edit the same project
            together and see each other&apos;s changes live — built with Node.js,
            Express, and Socket.io for the realtime sync.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">The problem it solves</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            When people build separate parts of a project alone, stitching those
            parts back together afterwards is slow and error-prone. Editing in one
            shared session removes that integration tax.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Stack</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">Node.js, Express.js, Socket.io.</p>
        </section>
      </div>
    ),
  },
  {
    id: 3,
    slug: "crud-rest-api",
    icon: <Database className="h-5 w-5" />,
    title: "CRUD REST API",
    tags: ["Node.js", "Express.js", "MongoDB", "REST"],
    blurb:
      "A REST API for CREATE / READ / UPDATE / DELETE over a school database, built with Node, Express, and MongoDB.",
    repo: GH,
    role: "Solo project",
    timeframe: "Backend",
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            A REST API that fires the core CREATE, READ, UPDATE, and DELETE
            operations using Node.js and Express, with JSON payloads and MongoDB
            for storage.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Design</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            Modeled around running a school database online: student and record
            data is stored in MongoDB and exposed through clean REST endpoints for
            each CRUD operation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Stack</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">Node.js, Express.js, MongoDB, JSON.</p>
        </section>
      </div>
    ),
  },
];
