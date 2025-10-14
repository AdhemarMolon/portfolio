# Solução para erro 404 ao recarregar páginas

## Problema
Quando você acessa diretamente uma rota (ex: `/portfolio/projects`) ou recarrega a página, o servidor retorna 404 porque não encontra um arquivo físico correspondente.

## Causa
O React Router funciona no lado do cliente (navegador), mas o servidor precisa sempre retornar o `index.html` para qualquer rota. Como o GitHub Pages (ou servidores estáticos) não tem essa configuração por padrão, ele retorna 404 para rotas que não existem fisicamente.

## Solução Implementada

### 1. Arquivo `public/404.html`
Criado um arquivo 404 personalizado que redireciona para o index.html preservando a rota.

### 2. Script no `index.html`
Adicionado um script que processa o redirecionamento e restaura a URL correta.

### 3. Como funciona:
1. Usuário acessa `/portfolio/projects` diretamente
2. Servidor não encontra o arquivo e retorna `404.html`
3. O script no `404.html` redireciona para `index.html` com a rota codificada
4. O script no `index.html` decodifica e restaura a rota
5. React Router renderiza a página correta

## Após o Deploy
Após fazer o deploy dessas alterações, o problema de 404 ao recarregar páginas deve estar resolvido.

## Alternativas para outros servidores

### Vercel
Criar `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Netlify
Criar `_redirects`:
```
/*    /index.html   200
```

### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /portfolio/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /portfolio/index.html [L]
</IfModule>
```

## Referências
- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [React Router Docs](https://reactrouter.com/en/main/guides/faq#what-causes-a-404-when-i-deploy)
