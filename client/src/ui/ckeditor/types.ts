import { ReactElement } from "react";

export interface CKEditorProps {
  content: string;
  feeds: Feed[];
  handleSave: () => Promise<void>;
  onReady?: (editor: any) => void;
  onChange?: (event: any, editor: any) => void;
  onBlur?: (event: any, editor: any) => void;
  onFocus?: (event: any, editor: any) => void;
  isVisible?: boolean;
  config?: any;
  placeHolder?: string
}

export interface FeedItem {
  id: string;
  userId: string;
  name: string;
  link: string;
}

export interface Feed {
  marker: string;
  feed: (searchString: string) => Promise<FeedItem[]>;
  minimumCharacters: number;
  itemRenderer?: (item: FeedItem) => ReactElement;
}
