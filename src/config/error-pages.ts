import type { SupportedLocale } from '@/i18n/locales'

export type ErrorPageKind = '404' | '500' | '503' | 'generic'

export interface ErrorPageAction {
  label: string
  href: string
}

export interface ErrorPageContent {
  statusCode: string
  statusText: string
  message: string
  actions: ErrorPageAction[]
}

const zhCnContent: Record<ErrorPageKind, ErrorPageContent> = {
  404: {
    statusCode: '404',
    statusText: 'Not Found',
    message: '当前访问的页面不存在，可能已被移动或删除。您可以从首页或归档继续浏览。',
    actions: [
      { label: '返回首页', href: '/' },
      { label: '查看归档', href: '/archives' },
      { label: '查看标签', href: '/tags' },
    ],
  },
  500: {
    statusCode: '500',
    statusText: 'Internal Server Error',
    message: '服务器在处理请求时发生了异常。请稍后刷新重试，若问题持续可联系站长。',
    actions: [
      { label: '返回首页', href: '/' },
      { label: '查看归档', href: '/archives' },
      { label: '查看标签', href: '/tags' },
      { label: '联系站长', href: 'mailto:hi@yukine.cc' },
    ],
  },
  503: {
    statusCode: '503',
    statusText: 'Service Unavailable',
    message: '服务暂时不可用，可能正在维护或短时过载。请稍后再访问。',
    actions: [
      { label: '返回首页', href: '/' },
      { label: '查看归档', href: '/archives' },
      { label: '查看标签', href: '/tags' },
      { label: '联系站长', href: 'mailto:hi@yukine.cc' },
    ],
  },
  generic: {
    statusCode: '520',
    statusText: 'Unknown Error',
    message: '请求未能正常完成。请返回首页继续浏览，或稍后重试。',
    actions: [
      { label: '返回首页', href: '/' },
      { label: '查看归档', href: '/archives' },
      { label: '查看标签', href: '/tags' },
    ],
  },
}

const localizedErrorPageContent: Partial<Record<SupportedLocale, Record<ErrorPageKind, ErrorPageContent>>> = {
  'zh-cn': zhCnContent,
}

export function getErrorPageContent(locale: SupportedLocale, kind: ErrorPageKind): ErrorPageContent {
  const localized = localizedErrorPageContent[locale] ?? localizedErrorPageContent['zh-cn']
  if (!localized) {
    throw new Error('Missing default error page content')
  }

  return localized[kind]
}
