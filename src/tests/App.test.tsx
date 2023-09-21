/**
 * @jest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved, render } from '@testing-library/react';
import MOCK_RESPONSE from './mockData';
import App from '../App';
import { NewsProvider } from '../contexts/NewsProvider';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

describe('Testando a inicialização da aplicação', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue(MOCK_RESPONSE);
    render(<NewsProvider><App /></NewsProvider>);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Testanto se a aplicação realiza o fetch da API', async() => { 
    expect(global.fetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=1000');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('Testanto se a estrutura da página', async() => {
    const logo = await screen.findByRole('heading', {  name: /hit news/i});
    expect(logo).toBeInTheDocument();

    const searchBtns = screen.getAllByRole('button');
    expect(searchBtns).toHaveLength(19);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});

describe('Testando a resposta da API MOCKADA', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue(MOCK_RESPONSE);
    render(<NewsProvider><App /></NewsProvider>);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Testanto as imagens enviadas aos cards', async() => { 
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(8);
    expect(images[0]).toHaveAttribute('src', 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2023_09/Doaes_THUMB.jpg');
    expect(images[6]).toHaveAttribute('src', 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_09/PMS_THUMB_HelenaPontes.jpg');
  });

  it('Testanto os titulos enviados aos cards', async() => { 
    const title1 = await screen.findByText(/taxa de sindicalização cai a 9,2% em 2022, menor nível da série/i);
    expect(title1).toBeInTheDocument();

    const title2 = await screen.findByText(/vendas no varejo sobem 0,7% em julho/i);
    expect(title2).toBeInTheDocument();

    const title3 = await screen.findByText(/com expansão de 0,5% em julho, serviços têm terceira alta consecutiva/i);
    expect(title3).toBeInTheDocument();

    const title4 = await screen.findByText(/servidores do ibge no rs se mobilizam para ajudar desabrigados nas enchentes/i);
    expect(title4).toBeInTheDocument();
  });
});

describe('Testando a interação de usuario', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue(MOCK_RESPONSE);
    render(<NewsProvider><App /></NewsProvider>);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Testanto a navegação entre os filtros', async() => { 
    const navBtn2 = await screen.findByText(/favoritos/i);
    expect(navBtn2).toBeInTheDocument();
    await userEvent.click(navBtn2);
    const endBtn = await screen.findByRole('button', { name: /acabaram as notícias/i })
    expect(endBtn).toBeInTheDocument();

    const navBtn1 = await screen.findByText(/releases/i);
    expect(navBtn1).toBeInTheDocument();
    await userEvent.click(navBtn1);
    const firstCardTitle = await screen.findByRole('heading', { name: /vendas no varejo sobem 0,7% em julho/i})
    expect(firstCardTitle).toBeInTheDocument();
    const newsCard = await screen.findAllByRole('article');
    expect(newsCard).toHaveLength(6);
  });

  it('Testanto o link de redirecionamento', async() => { 
    const completeNewslink = await screen.findAllByRole('link', { name: /leia a notícia completa aqui/i});
    expect(completeNewslink[0]).toBeInTheDocument();
    expect(completeNewslink[0]).toHaveAttribute('href', 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37931-servidores-do-ibge-no-rs-se-mobilizam-para-ajudar-desabrigados-nas-enchentes.html');
  });
});