# Supabase Setup

## 1. Criar o projeto
- Crie um projeto no Supabase.
- Copie `Project URL` e `anon public key`.

## 2. Configurar variáveis
- Duplique `.env.example` para `.env`.
- Preencha:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## 3. Criar o schema
- No SQL Editor do Supabase, execute o arquivo [`supabase/schema.sql`](C:\Users\dahan\OneDrive\Área%20de%20Trabalho\ILAC\pace-profile\supabase\schema.sql).

## 4. Definir admin principal
- Após criar a conta `equipejoaodahan@gmail.com`, rode:

```sql
update public.profiles
set is_admin = true
where email = 'equipejoaodahan@gmail.com';
```

## 5. Ajustar Auth
- Em `Authentication > Providers`, mantenha `Email` habilitado.
- Para desenvolvimento, desabilite confirmação obrigatória de e-mail se quiser testar fluxo sem validação.

## 6. Subir a aplicação
- Local: `npm run dev`
- Produção: configure as mesmas variáveis na Vercel.

## Observação
- Sem `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`, a aplicação continua funcionando em fallback local.
- Com Supabase configurado, login, cadastro, permissões admin e relatórios passam a usar banco real.
