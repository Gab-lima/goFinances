import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper"

export function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
          name: "Vendas",
          icon: "dollar-sign",
        },
        date: "13/04/2020",
      },
      {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
          name: "Vendas",
          icon: "dollar-sign",
        },
        date: "13/04/2020",
      },
      {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
          name: "Vendas",
          icon: "dollar-sign",
        },
        date: "13/04/2020",
      }
]
  ;

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/52010630?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriela</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
              <TransactionList 
                data={data}
                renderItem={({ item }) => <TransactionCard data={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace()
                }}
              />
      </Transactions>
    </Container>
  );
}
