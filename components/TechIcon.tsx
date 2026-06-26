const ICON_SLUGS: Record<string, string> = {
  "C#": "csharp",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "C": "c",
  "C++": "cplusplus",
  "Python": "python",
  "Java": "openjdk",
  "SQL": "mysql",
  "HTML": "html5",
  "CSS": "css3",
  ".NET / .NET Core": "dotnet",
  "ASP.NET MVC": "dotnet",
  "Entity Framework": "dotnet",
  "Unity": "unity",
  "React": "react",
  "Unity architecture": "unity",
  "Android": "android",
  "iOS": "apple",
  "MSSQL": "microsoftsqlserver",
  "Oracle": "oracle",
  "Git": "git",
  "GitLab": "gitlab",
  "GitLab CI/CD": "gitlab",
  "Jira": "jira",
  "JMeter": "apachejmeter",
  "REST / SOAP": "swagger",
};

export default function TechIcon({
  name,
  color = "c4c9d4",
  size = 14,
}: {
  name: string;
  color?: string;
  size?: number;
}) {
  const slug = ICON_SLUGS[name];
  if (!slug) return null;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className="opacity-80 inline-block shrink-0"
      loading="lazy"
    />
  );
}
