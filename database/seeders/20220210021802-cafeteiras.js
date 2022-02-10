'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('produtos', [
      //Mondial
      {
      nome_produto: 'Cafeteira Eletrica Mondial Arome Inox C-34 Ji 15 Xicaras Preta 220v',
      sku: 'C-34',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'Cafeteira Elétrica Dolce Arome Inox C-34 Ji 15 Xicaras Preta 220v',
      informacoes_tecnicas: 'Indicador de nível de água## Porta-filtro removível## 15 xícaras## Sistema corta pingos## Jarra inox simples## Voltagem: 220 V## Potência: 550 W## Consumo: 0,55 Kw/h## Garantia do Fornecedor 12 meses## Peso: 1150 gramas (bruto com embalagem)',
      peso: '1.15',
      preco: '214.56',
      custo: '214.56',
      title_pagina: 'Cafeteira Eletrica Mondial Arome Inox C-34 Ji 15 Xicaras Preta 220v',
      palavras_chave: 'Cafeteira Eletrica Mondial Arome Inox C-34 Ji 15 Xicaras Preta 220v',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644509973935-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644509973937-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644509973938-.jpg'
    },
    {
      nome_produto: 'Cafeteira Mondial Dolce Arome C-32-32x Inox - 220v',
      sku: 'C-32',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'Cafeteira Mondial Dolce Arome C-32-32X Inox - 220V## Tenha sempre um café delicioso e quentinho, com a cafeteira elétrica da Mondial. Veja! Para ter um café sempre quentinho e delicioso, basta ter um cafeteira que faz todo o processo para você, e a Mondial sempre traz as melhores tecnologias e inovações para o seu dia a dia. Faça até 32 xícaras de uma só vez. Sua família e amigos estarão sempre servidos com o melhor sabor e aroma do café!',
      informacoes_tecnicas: 'Marca: Mondial Modelo: C-32-32X Cor: Aço Inox Voltagem: 220V Potência: 800W Capacidade: 32 Xícaras Capacidade de água: 1L Filtro Permanente Dimensões da Embalagem: Altura: 33cm Largura: 29cm Profundidade: 29cm Peso: 3,500kg## Altura Real 33.6 ##Largura Real 26.4## Profundidade Real 21.5## Peso Real 1572## Garantia do Fornecedor 12 meses## Fabricante Mondial## Peso: 1750 gramas (bruto com embalagem)',
      peso: '3.5',
      preco: '165.90',
      custo: '165.90',
      title_pagina: 'Cafeteira Mondial Dolce Arome C-32-32x Inox - 220v',
      palavras_chave: 'Cafeteira Mondial Dolce Arome C-32-32x Inox - 220v',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644510016909-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644510016910-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644510016911-.jpg'
    },
    {
      nome_produto: 'Cafeteira Elétrica 127v Smart Coffe Mondial C-42-2x-ri',
      sku: 'C-42',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'Compacta e leve, a nova Cafeteira da Mondial com design contemporâneo, foi desenvolvida para passar dois cafés na medida certa e direto na xícara, ótimo para um café rápido e saboroso.# É muito simples de usar, é só acrescentar o pó de café, a água na medida certa, ligar e pronto, você terá 1 ou 2 xícaras de cafés rapidamente. Ideal para todos os ambientes, com um toque de sofisticação.# O filtro permanente com porta-filtro removível dispensa o uso de filtro de papel e proporciona mais rapidez e praticidade na hora de preparar o café. A tampa basculante e bandeja removível antiderrapante - Facilidade na hora da limpeza e a bandeja antiderrapante evita que as xícaras escorreguem.# Proteção contra superaquecimento, liga/ desliga luminoso que indica o funcionamento. Basta usar a colher dosadora, escolher a quantidade de café, ligar a cafeteira e em instantes o seu café estará pronto.',
      informacoes_tecnicas: 'Motivos que Fazem valer a Pena# Filtro permanente e porta-filtro removível# Ideal para o preparo de cafés na medida certa# Liga/ Desliga luminoso# Base removível# Fácil limpeza e remoção dos resíduos# Acompanha colher dosadora# Acompanham 2 xícaras# Dimensões e Peso# Altura: 24,8 cm# Largura: 23 cm# Profundidade: 18 cm# 1,300 kg# Conteúdo da Embalagem# 01 Cafeteira Mondial 2 xícaras Smart Coffee C-42# 02 Xícaras de Porcelana# Manual de Instruções',
      peso: '1.3',
      preco: '125.90',
      custo: '125.90',
      title_pagina: 'Cafeteira Elétrica 127v Xícaras Preto Smart Coffe Mondial C-42-2x-ri',
      palavras_chave: 'Cafeteira Elétrica 127v Xícaras Preto Smart Coffe Mondial C-42-2x-ri',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644510043147-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644510043148-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644510043149-.jpg'
    },
    {
      nome_produto: 'Cafeteira Mondial Expresso, 800w, Coffee, Cream C-08 - 127v',
      sku: 'C-08',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'Máquina de Café Expresso Mondial Coffee Cream C08 800W 127V Preto e Inox com Vaporizador para Leite',
      informacoes_tecnicas: 'Características:## - Marca: Mondial - Modelo: 1850-01## Especificação Técnica:## - 800W de potência# - 15 bars de pressão# - Design moderno em alumínio escovado# - Vaporizador para leite# - Bandeja de resíduos removível# - Reservatório com capacidade de 2L# - Prepara expresso e cappuccino## Conteúdo da Embalagem:## - Máquina De Café Expresso## Garantia do Fornecedor## 3 meses## Modelo## C-08## Peso:# 3100 gramas (bruto com embalagem)',
      peso: '3.1',
      preco: '575.00',
      custo: '575.00',
      title_pagina: 'Cafeteira Expresso, 800w, Coffee, Cream C-08 - 127v',
      palavras_chave: 'Cafeteira Expresso, 800w, Coffee, Cream C-08 - 127v',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644510136543-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644510136544-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644510136545-.jpg'
    },
    //================ Philco ======================
    {
      nome_produto: 'Cafeteira Elétrica Philco PH17, 15 Xícaras, 550W, 220V, Preto/Prata - 53902034',
      sku: 'PH-17',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'A Cafeteira Elétrica Philco PH17 tem capacidade para até 15 xícaras de café, quentinhos e muito saborosos!# Seu filtro é permanente, dispensando o uso do filtro de papel, e é removível, facilitando a lavagem; Cafezinhos para todo mundo, conte com a Cafeteira Elétrica Philco PH17!',
      informacoes_tecnicas: 'Características:## - Marca: Philco## - Modelo: 53902034## Especificações:## - Consumo (kW/h): 0,55## - Cor: Preto com Prata## - Capacidade (cafezinhos): 15## - Sistema corta-pingo## - Placa de aquecimento## - Capacidade do reservatório de água: 600 ml## - Acompanha colher dosadora## - Filtro permanente## Informações adicionais:## - Sua jarra de vidro super resistente tem capacidade para até 600ml## - Possui sistema corta-pingo que permite a retirada da jarra enquanto o café está sendo preparado## - Contém também placa de aquecimento que conserva a temperatura do café sem alterar o sabor## - E ainda acompanha colher dosadora para medição correta do pó de café## Conteúdo da embalagem:# - Cafeteira Elétrica Philco PH17## Garantia:# 1 ano de garantia (9 meses de garantia contratual junto ao fabricante + 3 meses referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor)## Peso:# 2162 gramas (bruto com embalagem)',
      peso: '2.1',
      preco: '168.32',
      custo: '168.32',
      title_pagina: 'Cafeteira Elétrica Philco PH17, 15 Xícaras, 550W, 220V, Preto/Prata - 53902034',
      palavras_chave: 'Cafeteira Elétrica Philco PH17, 15 Xícaras, 550W, 220V, Preto/Prata - 53902034',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644514509683-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644514509685-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644514509686-.jpg'
    },
    {
      nome_produto: 'Cafeteira Philco Single Thermo Inox, Red, 127V - PCF21',
      sku: 'PCF-21',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'A Cafeteira Philco Single Thermo Inox Red PCF21 prepara o café diretamente no copo térmico, prático e fácil de transportar!# Acompanha copo térmico, perfeito para ser levado para qualquer lugar. Com filtro permanente e porta filtro removíveis, dispensando o uso de filtro de papel, além de facilitar a limpeza. Oferece indicador interno de nível de água com reservatório para 450ml. E para sua maior comodidade, possui suporte para xícaras de qualquer modelo com ajuste de altura. Cafeteira Philco Single Thermo Inox Red PCF21, o design moderno que traz sabor e charme para sua vida!',
      informacoes_tecnicas: 'Características:## - Marca: Philco## - Modelo: PCF21## Especificações:## - Acompanha 1 copo térmico de 450ml## - Reservatório de água com capacidade de 450ml## - Filtro permanente e porta filtro removíveis## - Base antiderrapante##- Botão liga/desliga com luz de funcionamento## - Tanque de água com marcação de nível interna## - Suporte para copo/xícara com duas opções de altura## - Material: Plástico e metal## - Potência (Watts) : 600## - Cor : Vermelho## - Sistema corta-pingo : Sim## - Função Timer : Não## - Display Digital : Não## - Capacidade do reservatório de água : 450 ml## - Acompanha colher dosadora : Sim## - Filtro permanente : Sim## Dimensão do Produto:## - Largura : 24 cm## - Altura : 28,3 cm## - Profundidade : 15 cm## Conteúdo da Embalagem:## - 1x Cafeteira Philco PCF21 127V## Garantia do Fornecedor## 12 meses## Garantia:# 1 ano de garantia (9 meses de garantia contratual junto ao fabricante + 3 meses referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor)## Peso:# 2101 gramas (bruto com embalagem)',
      peso: '2.1',
      preco: '146.90',
      custo: '146.90',
      title_pagina: 'Cafeteira Philco Single Thermo Inox, Red, 127V - PCF21',
      palavras_chave: 'Cafeteira Philco Single Thermo Inox, Red, 127V - PCF21',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644514611632-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644514611633-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644514611633-.jpg'
    },
    {
      nome_produto: 'Cafeteira Philco PCF50PDI Design 220V',
      sku: 'PCF-21',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: 'Cafeteira Philco PCF50PDI Design é sofisticação, sabor e praticidade para você! Ela tem display Digital com relógio e timer que permite programar o preparo do café com até 24 horas de antecedência, perfeito para acordar todos os dias com café fresco. Com filtro permanente O filtro permanente que pode ser lavado diretamente na torneira ela dispensa o uso do filtro de papel. E para garantir mais sabor ela tem Sistema High Flow que melhora distribuição do fluxo de água através dos furos na tampa e extrai o máximo de sabor do café. Além disso também tem a Função Bold, para deixar o café mais intendo e Sistema soft drop, proporciona melhor sabor, aroma e temperatura. É mais que uma cafeteira, é um cuidado com você e sua família.',
      informacoes_tecnicas: '• Capacidade para 45 cafés,# • Função Bold, para deixar o café mais intenso,# • Sistema soft drop (tubo interno na jarra), proporciona melhor sabor, aroma e temperatura,# • Timer programável, permite programar o preparo do café com até 24 horas de antecedência,# • Display digital com relógio no formato 24 horas,# • Desligamento automático após 2 horas,# • Luzes de funcionamento e display com luz de fundo,# • Acabamento em inox,# • Acompanha colher dosadora,# • Prática jarra de vidro, pode ser levada à mesa,# • Filtro permanente e porta filtro removível,# • Placa de aquecimento, mantém o café aquecido após o preparo,# • Sistema corta-pingos,# • Base antiderrapante,# • Reservatório de água com graduação e capacidade de 1800 ml,# • Composição: plástico, metal e vidro.## Dimensão do Produto## Largura : 29 cm# Altura : 35 cm# Profundidade : 18 cm# Peso Líquido : 2340 gr# Especificações Técnicas## Potência (Watts) : 1000# Marca : Philco# Modelo : PCF50PDI# Cor : Inox# Capacidade (cafezinhos) : 45# Sistema corta-pingo : Sim# Função Timer : Sim# Display Digital : Sim# Placa de aquecimento : Sim# Capacidade do reservatório de água : 1800ml# Acompanha colher dosadora : Sim# Filtro permanente : Sim## Garantia do Fornecedor# 3 meses# Garantia:# 1 ano de garantia (9 meses de garantia contratual junto ao fabricante + 3 meses referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor)## Peso:# 2660 gramas (bruto com embalagem)',
      peso: '2.6',
      preco: '359.90',
      custo: '359.90',
      title_pagina: 'Cafeteira Philco PCF50PDI Design 220V',
      palavras_chave: 'Cafeteira Philco PCF50PDI Design 220V',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/miniaturaUm-1644514631273-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644514631273-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644514631274-.jpg'
    },
    {
      nome_produto: 'Cafeteira Philco Touch PCFD38CH 220V',
      sku: 'PCFD38CH',
      cod_barra: '123456789123',
      status_produto: 'Habilitado',
      categoria: 'Cafeteira',
      descricao_produto: '• A Cafeteira Philco PCFD30V Touch prepara deliciosos cafezinhos, além de dispor de um lindo acabamento em aço escovado e painel touch screen, proporcionando muito mais facilidade e modernidade para qualquer ambiente!# • Ela tem capacidade para 38 cafezinhos, sua bebida predileta em grande quantidade,# • Além de possuir placa aquecedora, assim o seu cafezinho mesmo depois de pronto vai se mantém quentinho e saboroso,# • Você ainda pode tomar o seu cafezinho despreocupado, pois tem relógio digital,# • Deixe o seu cafezinho ainda mais saboroso, de forma prática e rápida, para isso, conte com o que há de melhor, conte com a Cafeteira Philco PCFD30V Touch!',
      informacoes_tecnicas: 'Dimensão do Produto## Largura : 24,3 cm# Altura : 33,1 cm# Profundidade : 17,5 cm# Peso Líquido : 2100 gr## Especificações Técnicas## Potência (Watts) : 800# Marca : Philco# Modelo : -# Cor : Champagne com Preto# Capacidade (cafezinhos) : 38# Sistema corta-pingo : Sim# Função Timer : Sim# Display Digital : Sim# Placa de aquecimento : Sim# Capacidade do reservatório de água : 1,5 L# Acompanha colher dosadora : Sim# Filtro permanente : Sim## Garantia do Fornecedor## 3 meses## Garantia:# 1 ano de garantia (9 meses de garantia contratual junto ao fabricante + 3 meses referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor)## Peso:# 2100 gramas (bruto com embalagem)',
      peso: '2.1',
      preco: '229.90',
      custo: '229.90',
      title_pagina: 'Cafeteira Philco Touch PCFD38CH 220V',
      palavras_chave: 'Cafeteira Philco Touch PCFD38CH 220V',
      estoque: '50',
      imagem: 'images/uploads/imagemDoProduto/imagem-1644514643124-.jpg',
      miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644514643125-.jpg',
      miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644514643127-.jpg'
    }
    //============= OSTER ==============

  ], 
    
    {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
