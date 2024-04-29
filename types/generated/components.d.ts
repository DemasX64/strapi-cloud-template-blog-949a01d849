import type { Schema, Attribute } from '@strapi/strapi';

export interface TypeDebetovyeKarty extends Schema.Component {
  collectionName: 'components_type_debetovye_karty';
  info: {
    displayName: '\u0414\u0435\u0431\u0435\u0442\u043E\u0432\u044B\u0435 \u043A\u0430\u0440\u0442\u044B';
    icon: 'key';
  };
  attributes: {
    data: Attribute.Relation<
      'type.debetovye-karty',
      'oneToMany',
      'api::debet-card.debet-card'
    >;
  };
}

export interface TypeKreditnyeKarty extends Schema.Component {
  collectionName: 'components_type_kreditnye_karty';
  info: {
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B';
    icon: 'house';
  };
  attributes: {
    data: Attribute.Relation<
      'type.kreditnye-karty',
      'oneToMany',
      'api::credit-card.credit-card'
    >;
  };
}

export interface TypeKredity extends Schema.Component {
  collectionName: 'components_type_kredity';
  info: {
    displayName: '\u041A\u0440\u0435\u0434\u0438\u0442\u044B';
    icon: 'database';
  };
  attributes: {
    data: Attribute.Relation<'type.kredity', 'oneToMany', 'api::credit.credit'>;
  };
}

export interface TypeStavki extends Schema.Component {
  collectionName: 'components_type_stavki';
  info: {
    displayName: '\u0421\u0442\u0430\u0432\u043A\u0438';
    icon: 'bold';
  };
  attributes: {
    data: Attribute.Relation<'type.stavki', 'oneToMany', 'api::bet.bet'>;
  };
}

export interface TypeZajmy extends Schema.Component {
  collectionName: 'components_type_zajmy';
  info: {
    displayName: '\u0417\u0430\u0439\u043C\u044B';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    data: Attribute.Relation<'type.zajmy', 'oneToMany', 'api::loan.loan'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'type.debetovye-karty': TypeDebetovyeKarty;
      'type.kreditnye-karty': TypeKreditnyeKarty;
      'type.kredity': TypeKredity;
      'type.stavki': TypeStavki;
      'type.zajmy': TypeZajmy;
    }
  }
}
