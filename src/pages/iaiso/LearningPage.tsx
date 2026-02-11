import BackgroundElements from '@/components/BackgroundElements';
import { BookOpen, Video, Users, FileText, ArrowRight, PlayCircle, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Python for Data Science',
    description: 'Complete Python programming course focused on data analysis, visualization, and machine learning.',
    lessons: 45,
    duration: '24 hours',
    students: 12500,
    level: 'Beginner',
    icon: BookOpen,
  },
  {
    id: 2,
    title: 'AWS Solutions Architect',
    description: 'Comprehensive AWS training covering EC2, S3, RDS, Lambda, and architectural best practices.',
    lessons: 60,
    duration: '32 hours',
    students: 8900,
    level: 'Intermediate',
    icon: Award,
  },
  {
    id: 3,
    title: 'Machine Learning Mastery',
    description: 'Deep dive into ML algorithms, neural networks, and practical model deployment.',
    lessons: 80,
    duration: '48 hours',
    students: 6700,
    level: 'Advanced',
    icon: PlayCircle,
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    description: 'Build modern web applications with React, Node.js, databases, and cloud deployment.',
    lessons: 90,
    duration: '56 hours',
    students: 15200,
    level: 'Intermediate',
    icon: FileText,
  },
  {
    id: 5,
    title: 'DevOps & CI/CD',
    description: 'Master Docker, Kubernetes, Jenkins, and automated deployment pipelines.',
    lessons: 55,
    duration: '30 hours',
    students: 5400,
    level: 'Intermediate',
    icon: Award,
  },
  {
    id: 6,
    title: 'Cybersecurity Fundamentals',
    description: 'Learn network security, ethical hacking, and security compliance frameworks.',
    lessons: 70,
    duration: '40 hours',
    students: 4300,
    level: 'Beginner',
    icon: BookOpen,
  },
];

const learningPaths = [
  {
    title: 'AI Engineer',
    courses: 8,
    duration: '6 months',
    description: 'From Python basics to deploying production ML models.',
  },
  {
    title: 'Cloud Architect',
    courses: 10,
    duration: '8 months',
    description: 'Master multi-cloud platforms and enterprise architecture.',
  },
  {
    title: 'Full Stack Developer',
    courses: 12,
    duration: '10 months',
    description: 'Frontend, backend, databases, and modern web frameworks.',
  },
];

const LearningPage = () => {
  return (
    <>
      <BackgroundElements />
      <section className="relative w-full min-h-screen bg-background text-foreground px-6 lg:px-[10vw] py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-rooman-orange mb-4">
            IAISO - Indian AI & IT Solutions Organization
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Learning
          </h1>
          <p className="text-lg md:text-xl text-gray-text leading-relaxed">
            Access world-class courses, tutorials, and hands-on labs designed by industry experts. 
            Learn at your own pace and build skills that matter.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Courses', value: '200+' },
              { label: 'Students', value: '50K+' },
              { label: 'Instructors', value: '100+' },
              { label: 'Hours of Content', value: '10K+' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border bg-secondary/30">
                <div className="font-heading text-3xl font-bold text-rooman-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Featured Courses
            </h2>
            <button className="flex items-center gap-2 text-rooman-orange font-medium hover:gap-3 transition-all">
              View all courses
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group relative p-6 rounded-xl border border-border bg-secondary/30 hover:border-rooman-orange/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-rooman-orange/10 flex items-center justify-center flex-shrink-0">
                    <course.icon className="w-6 h-6 text-rooman-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {course.title}
                    </h3>
                    <span className="text-xs text-rooman-orange font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-text text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-text mb-4">
                  <span className="flex items-center gap-1">
                    <PlayCircle className="w-3 h-3" />
                    {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-gray-text">
                    <Users className="w-3 h-3" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <button className="text-sm text-rooman-orange font-medium group-hover:gap-3 transition-all flex items-center gap-2">
                    Start learning
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-rooman-green/30 bg-rooman-green/5 hover:bg-rooman-green/10 transition-all duration-300"
              >
                <Award className="w-10 h-10 text-rooman-green mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-text text-sm mb-4">{path.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-text mb-4">
                  <span>{path.courses} courses</span>
                  <span>•</span>
                  <span>{path.duration}</span>
                </div>
                <button className="w-full py-2 border border-rooman-green text-rooman-green rounded-lg font-medium hover:bg-rooman-green hover:text-white transition-colors">
                  Explore Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningPage;
