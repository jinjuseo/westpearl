import type { BlogPost, BlogCategory } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 서버 컴포넌트에서 겪은 트러블슈팅",
    excerpt: "Next.js 13의 서버 컴포넌트를 사용하면서 겪었던 문제와 해결 방법에 대한 기록입니다.",
    content: `# Next.js 서버 컴포넌트에서 겪은 트러블슈팅

Next.js 13에서 도입된 서버 컴포넌트는 정말 혁신적인 기능이지만, 처음 사용할 때 몇 가지 어려움이 있었습니다.

## 문제 상황

클라이언트 컴포넌트와 서버 컴포넌트를 혼합해서 사용할 때, 다음과 같은 에러가 발생했습니다:

\`\`\`
Error: useState can only be used in Client Components. Add the "use client" directive at the top of the file to use it.
\`\`\`

## 원인 분석

서버 컴포넌트 내에서 클라이언트 훅을 사용하려고 했기 때문에 발생한 문제였습니다. 서버 컴포넌트는 서버에서 렌더링되므로 React의 상태 관리 훅을 사용할 수 없습니다.

## 해결 방법

컴포넌트를 다음과 같이 분리했습니다:

- 데이터 페칭과 초기 렌더링을 담당하는 서버 컴포넌트
- 상호작용을 담당하는 클라이언트 컴포넌트

\`\`\`tsx
// 서버 컴포넌트
export default async function Page() {
  const data = await fetchData();
  return <ClientComponent initialData={data} />;
}

// 클라이언트 컴포넌트
'use client'
function ClientComponent({ initialData }) {
  const [state, setState] = useState(initialData);
  // ...
}
\`\`\`

이렇게 구조를 변경하니 문제가 해결되었고, 서버 컴포넌트의 장점과 클라이언트 컴포넌트의 상호작용성을 모두 활용할 수 있게 되었습니다.

## 배운 점

- 서버 컴포넌트와 클라이언트 컴포넌트의 역할을 명확히 구분해야 합니다
- 상태 관리가 필요한 부분은 클라이언트 컴포넌트로 분리하는 것이 좋습니다
- 데이터 페칭은 서버 컴포넌트에서, 상호작용은 클라이언트 컴포넌트에서 처리하는 것이 효율적입니다`,
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2023-12-15",
    category: "troubleshooting",
    readingTime: "5 min read",
    slug: "nextjs-server-components-troubleshooting",
  },
  {
    id: "2",
    title: "프론트엔드 개발자의 하루",
    excerpt: "프론트엔드 개발자로서의 일상과 업무 루틴을 공유합니다.",
    content: `# 프론트엔드 개발자의 하루

프론트엔드 개발자로서 매일 어떻게 시간을 보내는지 공유합니다.

## 아침 루틴 (9:00 - 10:30)

- 이메일 및 슬랙 메시지 확인
- 전날 작업한 코드 리뷰
- 오늘의 작업 계획 수립
- 팀 스탠드업 미팅 참여

## 오전 작업 (10:30 - 12:30)

집중력이 가장 높은 시간대이므로 복잡한 기능 구현이나 버그 수정에 집중합니다.

- 새로운 기능 개발
- 코드 리팩토링
- 성능 최적화

## 점심 시간 (12:30 - 13:30)

동료들과 함께 점심을 먹으며 가벼운 대화를 나눕니다. 가끔은 혼자 산책하며 머리를 식히기도 합니다.

## 오후 작업 (13:30 - 18:00)

- 코드 리뷰 및 PR 검토
- 팀원들과의 협업
- 문서화 작업
- 테스트 코드 작성

## 자기 계발 시간 (저녁)

퇴근 후에는 새로운 기술을 학습하거나 사이드 프로젝트를 진행합니다. 최근에는 **Three.js**와 **WebGL**에 관심을 갖고 공부하고 있습니다.

## 마무리

프론트엔드 개발은 끊임없이 변화하는 분야이기 때문에 지속적인 학습이 필요합니다. 하지만 그만큼 새로운 것을 배우고 적용하는 즐거움도 큽니다.`,
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2024-01-20",
    category: "daily",
    readingTime: "4 min read",
    slug: "frontend-developer-daily-routine",
  },
  {
    id: "3",
    title: "React Query로 상태 관리 최적화하기",
    excerpt: "React Query를 활용하여 API 통신과 상태 관리를 효율적으로 처리하는 방법을 소개합니다.",
    content: `# React Query로 상태 관리 최적화하기

React 애플리케이션에서 서버 상태 관리는 항상 까다로운 문제였습니다. React Query는 이러한 문제를 해결하기 위한 강력한 도구입니다.

## React Query의 장점

- 서버 데이터 캐싱
- 자동 리페칭
- 페이지네이션 및 무한 스크롤 지원
- 낙관적 업데이트
- 에러 핸들링

## 기본 사용법

\`\`\`tsx
import { useQuery } from 'react-query';

function App() {
  const { data, isLoading, error } = useQuery('todos', fetchTodos);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 데이터 변이

\`\`\`tsx
import { useMutation, useQueryClient } from 'react-query';

function TodoForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // 성공 시 todos 쿼리 무효화
      queryClient.invalidateQueries('todos');
    },
  });
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      mutation.mutate({ title: 'New Todo' });
    }}>
      <button type="submit">Add Todo</button>
    </form>
  );
}
\`\`\`

## 결론

React Query를 사용하면 복잡한 상태 관리 로직을 크게 줄이고, 서버 데이터를 효율적으로 관리할 수 있습니다. 특히 대규모 애플리케이션에서 그 효과가 더욱 두드러집니다.`,
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2024-02-05",
    category: "development",
    readingTime: "7 min read",
    slug: "react-query-state-management",
  },
  {
    id: "4",
    title: "디자인 시스템 구축 경험 공유",
    excerpt: "회사에서 디자인 시스템을 구축한 경험과 배운 점을 공유합니다.",
    content: `# 디자인 시스템 구축 경험 공유

최근 회사에서 디자인 시스템을 구축하는 프로젝트를 진행했습니다. 이 과정에서 배운 점과 경험을 공유합니다.

## 디자인 시스템이란?

디자인 시스템은 제품을 디자인하고 개발하는 데 사용되는 재사용 가능한 컴포넌트와 패턴의 모음입니다. 일관된 사용자 경험을 제공하고 개발 효율성을 높이는 데 큰 도움이 됩니다.

## 구축 과정

### 1. 현황 분석

기존 UI를 분석하여 중복되는 패턴과 비일관적인 요소들을 파악했습니다.

### 2. 디자인 토큰 정의

색상, 타이포그래피, 간격, 그림자 등의 기본 디자인 토큰을 정의했습니다.

\`\`\`css
:root {
  --color-primary: #e050c3;
  --color-secondary: #a855f7;
  --font-family: 'Inter', sans-serif;
  --spacing-unit: 4px;
}
\`\`\`

### 3. 컴포넌트 설계

버튼, 입력 필드, 카드 등 기본 컴포넌트부터 시작하여 복잡한 컴포넌트까지 단계적으로 설계했습니다.

### 4. 문서화

Storybook을 사용하여 각 컴포넌트의 사용법과 변형을 문서화했습니다.

## 배운 점

- **협업의 중요성**: 디자이너와 개발자 간의 긴밀한 협업이 필수적입니다.
- **유연성과 일관성의 균형**: 너무 엄격하면 사용성이 떨어지고, 너무 유연하면 일관성이 깨집니다.
- **점진적 도입**: 한 번에 모든 것을 바꾸려 하지 말고, 점진적으로 도입하는 것이 효과적입니다.

## 결과

디자인 시스템 도입 후 개발 속도가 약 **30% 향상**되었고, UI의 일관성이 크게 개선되었습니다. 또한 신규 개발자의 온보딩 시간도 단축되었습니다.`,
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2024-03-10",
    category: "design",
    readingTime: "6 min read",
    slug: "design-system-experience",
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "all") {
    return blogPosts
  }
  return blogPosts.filter((post) => post.category === category)
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}
