import { SignInButton } from "@clerk/clerk-react";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-5 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                My-Talent
              </span>
              <span className="text-xs text-base-content/60 -mt-1">
                Code With Me...
              </span>
            </div>
          </Link>

          <SignInButton mode="modal">
            <button className="px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white text-sm flex items-center gap-2">
              Get Started
              <ArrowRightIcon className="size-4" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <div className="flex-1 flex items-center py-16">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="badge badge-primary badge-md w-fit">
              <ZapIcon className="size-4" />
              Real Time Collaboration
            </div>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code With Me...
              </span>
              <br />
              Learn Together
            </h1>

            <p className="text-lg text-base-content/70 max-w-md">
              Connect face to face, code in real-time, and ace your interviews.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="badge badge-outline badge-sm">
                <CheckIcon className="size-3 text-success" />
                Video Chat
              </div>
              <div className="badge badge-outline badge-sm">
                <CheckIcon className="size-3 text-success" />
                Code Editor
              </div>
              <div className="badge badge-outline badge-sm">
                <CheckIcon className="size-3 text-success" />
                Multi-Lang
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-sm">
                  Start
                  <ArrowRightIcon className="size-4" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-sm">
                <VideoIcon className="size-4" />
                Demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-horizontal bg-base-100 shadow w-fit">
              <div className="stat px-4 py-2">
                <div className="stat-value text-primary text-lg">10K+</div>
                <div className="stat-title text-xs">Users</div>
              </div>

              <div className="stat px-4 py-2">
                <div className="stat-value text-primary text-lg">50K+</div>
                <div className="stat-title text-xs">Sessions</div>
              </div>

              <div className="stat px-4 py-2">
                <div className="stat-value text-primary text-lg">99.9%</div>
                <div className="stat-title text-xs">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/hero.png"
              alt="Code"
              className="max-h-[60vh] w-auto rounded-2xl shadow-xl border"
            />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need To{" "}
            <span className="text-primary font-mono">Succeed</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* FEATURE 1 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center items-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">HD Video Calls</h3>
              <p className="text-base-content/70">
                Crystal clear video and audio for seamless communication during
                interviews
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center items-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Live Code Editor</h3>
              <p className="text-base-content/70">
                Collaborate in real-time with syntax highlighting and multiple
                language support
              </p>
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center items-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Easy Collaboration</h3>
              <p className="text-base-content/70">
                Share your screen, discuss solutions, and learn from each other
                in real time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
