import Link from "next/link";
import { mock } from "node:test";
const mockURL = [
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfW40koSCEhRVUOf5dvG6HXQmBLosbz0TWlF",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgs2ma0HoSCEhRVUOf5dvG6HXQmBLosbz0TWl",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOvJwPdRVztbHSj4o63iTGmdFDaXpJZALVlECN",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfVL2xoSCEhRVUOf5dvG6HXQmBLosbz0TWlF",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfW40koSCEhRVUOf5dvG6HXQmBLosbz0TWlF",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgs2ma0HoSCEhRVUOf5dvG6HXQmBLosbz0TWl",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOvJwPdRVztbHSj4o63iTGmdFDaXpJZALVlECN",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfVL2xoSCEhRVUOf5dvG6HXQmBLosbz0TWlF",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfW40koSCEhRVUOf5dvG6HXQmBLosbz0TWlF",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgs2ma0HoSCEhRVUOf5dvG6HXQmBLosbz0TWl",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOvJwPdRVztbHSj4o63iTGmdFDaXpJZALVlECN",
  "https://priikhfpr7.ufs.sh/f/IPu9N0GNdxoOgfVL2xoSCEhRVUOf5dvG6HXQmBLosbz0TWlF"
]
  
const mockImages = mockURL.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
