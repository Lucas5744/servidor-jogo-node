 http = require('http')

const jogadores = []

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')

  if (req.url === '/cadastrar' && req.method === 'POST') {
    const novoJogadconstor = {
      id: jogadores.length + 1,
      nome: '',
      pontuacao: 0
    }
    jogadores.push(novoJogador)
    res.end(JSON.stringify({mensagem: 'Jogador cadastrado com sucesso', jogador: novoJogador}))
  } else if (req.url === '/ranking' && req.method === 'GET') {
    res.end(JSON.stringify(jogadores))
  } else if (req.url === '/adicionar-pontos' && req.method === 'POST') {
    res.end(JSON.stringify({mensagem: 'Pontuação atualizada'}))
  } else {
    res.end(JSON.stringify({mensagem: 'Rota não encontrada'}))
  }
})

servidor.listen(3000, () => {
  console.log('Servidor do jogo rodando na porta 3000')
})
