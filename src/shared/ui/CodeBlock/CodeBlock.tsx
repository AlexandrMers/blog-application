import styles from './styles.module.scss'

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className={styles.CodeBlock}>
      <code>{code}</code>
    </pre>
  )
}
