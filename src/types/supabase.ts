/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/extended_profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.extended_profiles.id"];
          username?: parameters["rowFilter.extended_profiles.username"];
          full_name?: parameters["rowFilter.extended_profiles.full_name"];
          created_at?: parameters["rowFilter.extended_profiles.created_at"];
          portfolios_count?: parameters["rowFilter.extended_profiles.portfolios_count"];
          items_count?: parameters["rowFilter.extended_profiles.items_count"];
          items?: parameters["rowFilter.extended_profiles.items"];
          transactions?: parameters["rowFilter.extended_profiles.transactions"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["extended_profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** extended_profiles */
          extended_profiles?: definitions["extended_profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.extended_profiles.id"];
          username?: parameters["rowFilter.extended_profiles.username"];
          full_name?: parameters["rowFilter.extended_profiles.full_name"];
          created_at?: parameters["rowFilter.extended_profiles.created_at"];
          portfolios_count?: parameters["rowFilter.extended_profiles.portfolios_count"];
          items_count?: parameters["rowFilter.extended_profiles.items_count"];
          items?: parameters["rowFilter.extended_profiles.items"];
          transactions?: parameters["rowFilter.extended_profiles.transactions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.extended_profiles.id"];
          username?: parameters["rowFilter.extended_profiles.username"];
          full_name?: parameters["rowFilter.extended_profiles.full_name"];
          created_at?: parameters["rowFilter.extended_profiles.created_at"];
          portfolios_count?: parameters["rowFilter.extended_profiles.portfolios_count"];
          items_count?: parameters["rowFilter.extended_profiles.items_count"];
          items?: parameters["rowFilter.extended_profiles.items"];
          transactions?: parameters["rowFilter.extended_profiles.transactions"];
        };
        body: {
          /** extended_profiles */
          extended_profiles?: definitions["extended_profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/items": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.items.id"];
          portfolio_id?: parameters["rowFilter.items.portfolio_id"];
          user_id?: parameters["rowFilter.items.user_id"];
          type?: parameters["rowFilter.items.type"];
          title?: parameters["rowFilter.items.title"];
          description?: parameters["rowFilter.items.description"];
          total_quantity?: parameters["rowFilter.items.total_quantity"];
          future_price?: parameters["rowFilter.items.future_price"];
          created_at?: parameters["rowFilter.items.created_at"];
          updated_at?: parameters["rowFilter.items.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["items"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** items */
          items?: definitions["items"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.items.id"];
          portfolio_id?: parameters["rowFilter.items.portfolio_id"];
          user_id?: parameters["rowFilter.items.user_id"];
          type?: parameters["rowFilter.items.type"];
          title?: parameters["rowFilter.items.title"];
          description?: parameters["rowFilter.items.description"];
          total_quantity?: parameters["rowFilter.items.total_quantity"];
          future_price?: parameters["rowFilter.items.future_price"];
          created_at?: parameters["rowFilter.items.created_at"];
          updated_at?: parameters["rowFilter.items.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.items.id"];
          portfolio_id?: parameters["rowFilter.items.portfolio_id"];
          user_id?: parameters["rowFilter.items.user_id"];
          type?: parameters["rowFilter.items.type"];
          title?: parameters["rowFilter.items.title"];
          description?: parameters["rowFilter.items.description"];
          total_quantity?: parameters["rowFilter.items.total_quantity"];
          future_price?: parameters["rowFilter.items.future_price"];
          created_at?: parameters["rowFilter.items.created_at"];
          updated_at?: parameters["rowFilter.items.updated_at"];
        };
        body: {
          /** items */
          items?: definitions["items"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/likes": {
    get: {
      parameters: {
        query: {
          portfolio_id?: parameters["rowFilter.likes.portfolio_id"];
          user_id?: parameters["rowFilter.likes.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["likes"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** likes */
          likes?: definitions["likes"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          portfolio_id?: parameters["rowFilter.likes.portfolio_id"];
          user_id?: parameters["rowFilter.likes.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          portfolio_id?: parameters["rowFilter.likes.portfolio_id"];
          user_id?: parameters["rowFilter.likes.user_id"];
        };
        body: {
          /** likes */
          likes?: definitions["likes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/portfolios": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.portfolios.id"];
          user_id?: parameters["rowFilter.portfolios.user_id"];
          title?: parameters["rowFilter.portfolios.title"];
          description?: parameters["rowFilter.portfolios.description"];
          private?: parameters["rowFilter.portfolios.private"];
          start_on?: parameters["rowFilter.portfolios.start_on"];
          end_on?: parameters["rowFilter.portfolios.end_on"];
          created_at?: parameters["rowFilter.portfolios.created_at"];
          updated_at?: parameters["rowFilter.portfolios.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["portfolios"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** portfolios */
          portfolios?: definitions["portfolios"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.portfolios.id"];
          user_id?: parameters["rowFilter.portfolios.user_id"];
          title?: parameters["rowFilter.portfolios.title"];
          description?: parameters["rowFilter.portfolios.description"];
          private?: parameters["rowFilter.portfolios.private"];
          start_on?: parameters["rowFilter.portfolios.start_on"];
          end_on?: parameters["rowFilter.portfolios.end_on"];
          created_at?: parameters["rowFilter.portfolios.created_at"];
          updated_at?: parameters["rowFilter.portfolios.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.portfolios.id"];
          user_id?: parameters["rowFilter.portfolios.user_id"];
          title?: parameters["rowFilter.portfolios.title"];
          description?: parameters["rowFilter.portfolios.description"];
          private?: parameters["rowFilter.portfolios.private"];
          start_on?: parameters["rowFilter.portfolios.start_on"];
          end_on?: parameters["rowFilter.portfolios.end_on"];
          created_at?: parameters["rowFilter.portfolios.created_at"];
          updated_at?: parameters["rowFilter.portfolios.updated_at"];
        };
        body: {
          /** portfolios */
          portfolios?: definitions["portfolios"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          deleted_at?: parameters["rowFilter.profiles.deleted_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          deleted_at?: parameters["rowFilter.profiles.deleted_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          deleted_at?: parameters["rowFilter.profiles.deleted_at"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/transactions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          user_id?: parameters["rowFilter.transactions.user_id"];
          item_id?: parameters["rowFilter.transactions.item_id"];
          isbuy?: parameters["rowFilter.transactions.isbuy"];
          description?: parameters["rowFilter.transactions.description"];
          unit_amount?: parameters["rowFilter.transactions.unit_amount"];
          quantity?: parameters["rowFilter.transactions.quantity"];
          currency?: parameters["rowFilter.transactions.currency"];
          company?: parameters["rowFilter.transactions.company"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
          created_at?: parameters["rowFilter.transactions.created_at"];
          updated_at?: parameters["rowFilter.transactions.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["transactions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** transactions */
          transactions?: definitions["transactions"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          user_id?: parameters["rowFilter.transactions.user_id"];
          item_id?: parameters["rowFilter.transactions.item_id"];
          isbuy?: parameters["rowFilter.transactions.isbuy"];
          description?: parameters["rowFilter.transactions.description"];
          unit_amount?: parameters["rowFilter.transactions.unit_amount"];
          quantity?: parameters["rowFilter.transactions.quantity"];
          currency?: parameters["rowFilter.transactions.currency"];
          company?: parameters["rowFilter.transactions.company"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
          created_at?: parameters["rowFilter.transactions.created_at"];
          updated_at?: parameters["rowFilter.transactions.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          user_id?: parameters["rowFilter.transactions.user_id"];
          item_id?: parameters["rowFilter.transactions.item_id"];
          isbuy?: parameters["rowFilter.transactions.isbuy"];
          description?: parameters["rowFilter.transactions.description"];
          unit_amount?: parameters["rowFilter.transactions.unit_amount"];
          quantity?: parameters["rowFilter.transactions.quantity"];
          currency?: parameters["rowFilter.transactions.currency"];
          company?: parameters["rowFilter.transactions.company"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
          created_at?: parameters["rowFilter.transactions.created_at"];
          updated_at?: parameters["rowFilter.transactions.updated_at"];
        };
        body: {
          /** transactions */
          transactions?: definitions["transactions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  extended_profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    full_name?: string;
    /** Format: timestamp with time zone */
    created_at?: string;
    /** Format: text */
    portfolios_count?: string;
    /** Format: bigint */
    items_count?: number;
    /** Format: bigint */
    items?: number;
    /** Format: ARRAY */
    transactions?: unknown[];
  };
  items: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `portfolios.id`.<fk table='portfolios' column='id'/>
     */
    portfolio_id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
    /**
     * Format: public.item_type
     * @default other
     * @enum {string}
     */
    type?:
      | "fund"
      | "stock"
      | "home"
      | "flat"
      | "gold"
      | "silver"
      | "cash"
      | "deposit"
      | "other";
    /** Format: character varying */
    title?: string;
    /** Format: character varying */
    description?: string;
    /** Format: integer */
    total_quantity?: number;
    /** Format: numeric */
    future_price?: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
  };
  likes: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `portfolios.id`.<fk table='portfolios' column='id'/>
     */
    portfolio_id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
  };
  portfolios: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
    /** Format: text */
    title?: string;
    /** Format: text */
    description?: string;
    /**
     * Format: boolean
     * @default true
     */
    private?: boolean;
    /** Format: date */
    start_on?: string;
    /** Format: date */
    end_on?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    full_name?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    website?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
    /** Format: timestamp without time zone */
    deleted_at?: string;
  };
  transactions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    user_id: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `items.id`.<fk table='items' column='id'/>
     */
    item_id?: number;
    /**
     * Format: boolean
     * @default true
     */
    isbuy?: boolean;
    /** Format: character varying */
    description?: string;
    /** Format: numeric */
    unit_amount: number;
    /** Format: integer */
    quantity: number;
    /**
     * Format: public.transaction_currency
     * @default TRY
     * @enum {string}
     */
    currency?:
      | "TRY"
      | "USD"
      | "EUR"
      | "CHF"
      | "JPY"
      | "GBP"
      | "AUD"
      | "BAM"
      | "TMT";
    /**
     * Format: public.transaction_company
     * @default Other
     * @enum {string}
     */
    company?:
      | "Ziraat Bankası"
      | "İş Bankası"
      | "Garanti Bankası"
      | "HSBC Bank"
      | "Yapı ve Kredi Bankası A.Ş."
      | "Akbank T.A.Ş."
      | "Tacirler Yatırım Menkul Değerler A.Ş."
      | "VakıfBank"
      | "Other";
    /** Format: timestamp without time zone */
    transaction_date?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description extended_profiles */
  "body.extended_profiles": definitions["extended_profiles"];
  /** Format: uuid */
  "rowFilter.extended_profiles.id": string;
  /** Format: text */
  "rowFilter.extended_profiles.username": string;
  /** Format: text */
  "rowFilter.extended_profiles.full_name": string;
  /** Format: timestamp with time zone */
  "rowFilter.extended_profiles.created_at": string;
  /** Format: text */
  "rowFilter.extended_profiles.portfolios_count": string;
  /** Format: bigint */
  "rowFilter.extended_profiles.items_count": string;
  /** Format: bigint */
  "rowFilter.extended_profiles.items": string;
  /** Format: ARRAY */
  "rowFilter.extended_profiles.transactions": string;
  /** @description items */
  "body.items": definitions["items"];
  /** Format: bigint */
  "rowFilter.items.id": string;
  /** Format: bigint */
  "rowFilter.items.portfolio_id": string;
  /** Format: uuid */
  "rowFilter.items.user_id": string;
  /** Format: public.item_type */
  "rowFilter.items.type": string;
  /** Format: character varying */
  "rowFilter.items.title": string;
  /** Format: character varying */
  "rowFilter.items.description": string;
  /** Format: integer */
  "rowFilter.items.total_quantity": string;
  /** Format: numeric */
  "rowFilter.items.future_price": string;
  /** Format: timestamp with time zone */
  "rowFilter.items.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.items.updated_at": string;
  /** @description likes */
  "body.likes": definitions["likes"];
  /** Format: bigint */
  "rowFilter.likes.portfolio_id": string;
  /** Format: uuid */
  "rowFilter.likes.user_id": string;
  /** @description portfolios */
  "body.portfolios": definitions["portfolios"];
  /** Format: bigint */
  "rowFilter.portfolios.id": string;
  /** Format: uuid */
  "rowFilter.portfolios.user_id": string;
  /** Format: text */
  "rowFilter.portfolios.title": string;
  /** Format: text */
  "rowFilter.portfolios.description": string;
  /** Format: boolean */
  "rowFilter.portfolios.private": string;
  /** Format: date */
  "rowFilter.portfolios.start_on": string;
  /** Format: date */
  "rowFilter.portfolios.end_on": string;
  /** Format: timestamp with time zone */
  "rowFilter.portfolios.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.portfolios.updated_at": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: text */
  "rowFilter.profiles.full_name": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.website": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: timestamp without time zone */
  "rowFilter.profiles.deleted_at": string;
  /** @description transactions */
  "body.transactions": definitions["transactions"];
  /** Format: bigint */
  "rowFilter.transactions.id": string;
  /** Format: uuid */
  "rowFilter.transactions.user_id": string;
  /** Format: bigint */
  "rowFilter.transactions.item_id": string;
  /** Format: boolean */
  "rowFilter.transactions.isbuy": string;
  /** Format: character varying */
  "rowFilter.transactions.description": string;
  /** Format: numeric */
  "rowFilter.transactions.unit_amount": string;
  /** Format: integer */
  "rowFilter.transactions.quantity": string;
  /** Format: public.transaction_currency */
  "rowFilter.transactions.currency": string;
  /** Format: public.transaction_company */
  "rowFilter.transactions.company": string;
  /** Format: timestamp without time zone */
  "rowFilter.transactions.transaction_date": string;
  /** Format: timestamp with time zone */
  "rowFilter.transactions.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.transactions.updated_at": string;
}

export interface operations {}

export interface external {}
