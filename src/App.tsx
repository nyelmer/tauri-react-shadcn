import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Code, Github, Layers, Rocket, Terminal, Zap } from "lucide-react";

export default function App() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
			{/* Hero Section */}
			<section className="container mx-auto py-20 text-center px-4">
				<Badge className="mb-4" variant="outline">
					Tauri + React + TypeScript + Tailwind + ShadCN
				</Badge>
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
					Modern Desktop App <br /> Development Starter
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">A powerful, production-ready template for building cross-platform desktop applications with web technologies.</p>
				<div className="flex flex-wrap gap-4 justify-center">
					<a href="https://github.com/nyelmer/tauri-react-shadcn" target="_blank" rel="noopener noreferrer">
						<Button size="lg" className="gap-2 cursor-pointer">
							<Github size={16} /> View on GitHub
						</Button>
					</a>
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto py-16 px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Card>
						<CardHeader>
							<Rocket className="h-10 w-10 mb-2 text-primary" />
							<CardTitle>Tauri</CardTitle>
							<CardDescription>Build smaller, faster, and more secure desktop applications with a web frontend</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Leverage Rust's memory safety and performance while using your existing web skills.</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<Layers className="h-10 w-10 mb-2 text-primary" />
							<CardTitle>React + TypeScript</CardTitle>
							<CardDescription>Modern frontend development with type safety</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Build robust UIs with React's component model and TypeScript's static type checking.</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<Zap className="h-10 w-10 mb-2 text-primary" />
							<CardTitle>Tailwind + ShadCN</CardTitle>
							<CardDescription>Beautiful, accessible components with utility-first CSS</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Rapidly build custom interfaces without leaving your HTML using utility classes and pre-built components.</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Getting Started Section */}
			<section className="container mx-auto py-16 px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>

				<Tabs defaultValue="setup" className="max-w-3xl mx-auto">
					<TabsList className="grid grid-cols-3 mb-8">
						<TabsTrigger value="setup">Setup</TabsTrigger>
						<TabsTrigger value="development">Development</TabsTrigger>
						<TabsTrigger value="building">Building</TabsTrigger>
					</TabsList>

					<TabsContent value="setup" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Project Setup</CardTitle>
								<CardDescription>Follow these steps to get started with your project</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<h3 className="font-semibold flex items-center gap-2">
										<Terminal size={18} /> Prerequisites
									</h3>
									<ul className="list-disc pl-6 text-muted-foreground">
										<li>Bun 1.2.4 or later</li>
										<li>Rust and Cargo (for Tauri)</li>
										<li>OS-specific dependencies for Tauri</li>
									</ul>
								</div>

								<div className="space-y-2">
									<h3 className="font-semibold flex items-center gap-2">
										<Code size={18} /> Clone and Install
									</h3>
									<div className="bg-muted p-4 rounded-md font-mono text-sm">
										<p># Clone the repository</p>
										<p>git clone https://github.com/nyelmer/tauri-react-shadcn.git</p>
										<p>cd tauri-react-shadcn</p>
										<p># Install dependencies</p>
										<p>bun install</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="development" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Development Workflow</CardTitle>
								<CardDescription>Commands to run during development</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<h3 className="font-semibold">Start Development Server</h3>
									<div className="bg-muted p-4 rounded-md font-mono text-sm">
										<p># Start the development server with hot-reload</p>
										<p>bun run tauri dev</p>
									</div>
									<p className="text-muted-foreground">This will start both the React development server and the Tauri development process.</p>
								</div>

								<div className="space-y-2">
									<h3 className="font-semibold">Adding ShadCN Components</h3>
									<div className="bg-muted p-4 rounded-md font-mono text-sm">
										<p># Add a new component</p>
										<p>bunx --bun shadcn@latest add button</p>
									</div>
									<p className="text-muted-foreground">Replace "button" with any component you want to add from the ShadCN library.</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="building" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Building for Production</CardTitle>
								<CardDescription>Create optimized builds for distribution</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<h3 className="font-semibold">Build the Application</h3>
									<div className="bg-muted p-4 rounded-md font-mono text-sm">
										<p># Create a production build</p>
										<p>bun run tauri build</p>
									</div>
									<p className="text-muted-foreground">
										This will create platform-specific installers in the <code>src-tauri/target/release/bundle</code> directory.
									</p>
								</div>

								<div className="space-y-2">
									<h3 className="font-semibold">Customizing the Build</h3>
									<p className="text-muted-foreground">
										You can customize your application's metadata, icons, and more in the <code>src-tauri/tauri.conf.json</code> file.
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</section>

			{/* Project Structure Section */}
			<section className="container mx-auto py-16 px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Project Structure</h2>
				<div className="max-w-3xl mx-auto bg-muted p-6 rounded-lg font-mono text-sm">
					<pre className="text-left">
						{`├── src/                 # React frontend code
│   ├── components/      # React components
│   │   └── ui/          # ShadCN UI components
│   │   └── App.tsx          # Main React component
│   └── main.tsx         # React entry point
├── src-tauri/           # Tauri backend code
│   ├── src/             # Rust source code
│   └── tauri.conf.json  # Tauri configuration
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies`}
					</pre>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t bg-background">
				<div className="container mx-auto py-10 px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<h3 className="text-xl font-bold">Tauri + React + ShadCN</h3>
							<p className="text-muted-foreground">Modern desktop app development starter</p>
						</div>
						<div className="flex gap-4">
							<a href="https://github.com/nyelmer/tauri-react-shadcn" target="_blank" rel="noopener noreferrer">
								<Button variant="ghost" size="icon" className="cursor-pointer">
									<Github className="h-5 w-5" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
