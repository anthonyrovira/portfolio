```typescript:src/components
├── layouts/                  # Layout components
│   ├── MainLayout.tsx       # Main layout wrapper
│   └── Section.tsx          # Reusable section wrapper
│
├── sections/                 # Main page sections (containers)
│   ├── about/               # About section and its specific components
│   │   ├── About.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── ProfilePicture.tsx
│   │
│   ├── contact/             # Contact section and its specific components
│   │   ├── ContactForm.tsx
│   │   └── SocialLinks.tsx
│   │
│   ├── hero/                # Hero section and its specific components
│   │   ├── Hero.tsx
│   │   ├── StatusBadge.tsx
│   │   └── TypingEffect.tsx
│   │
│   └── portfolio/           # Portfolio section and its specific components
│       ├── Portfolio.tsx
│       ├── ProjectCard.tsx
│       └── ProjectTags.tsx
│
├── ui/                      # Reusable UI components
│   ├── animations/          # Animation-related components
│   │   ├── AnimatedSection.tsx
│   │   └── FadeIn.tsx
│   │
│   ├── buttons/            # Button components
│   │   ├── IconButton.tsx
│   │   └── Button.tsx
│   │
│   ├── forms/              # Form-related components
│   │   ├── Input.tsx
│   │   ├── TextArea.tsx
│   │   └── FormField.tsx
│   │
│   └── common/             # Other common UI components
│       ├── ThemeToggle.tsx
│       ├── LanguageSelector.tsx
│       └── LoadingSpinner.tsx
│
└── providers/              # Context providers and wrappers
    ├── ThemeProvider.tsx
    └── LanguageProvider.tsx
```
