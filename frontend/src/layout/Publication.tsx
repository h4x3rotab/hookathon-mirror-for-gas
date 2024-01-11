import { PublicationMainFocus } from "@lens-protocol/metadata"
import {useEffect, useMemo, useState} from "react";

import { serializeLink } from "../utils/serializeLink";

interface PostData {
    text?: string;
    img?: string;
}

function parseMetadata(metadata: any): PostData {
    metadata = metadata.lens;
    const focus = metadata.mainContentFocus;
    switch (focus) {
        case PublicationMainFocus.TEXT_ONLY:
            return { text: metadata.content };
        case PublicationMainFocus.IMAGE:
            return {
                text: metadata.content || metadata.title,
                img: metadata.image.item,
            }
        default:
            return {}
    }
}

export function Publication({contentURI}: {contentURI: string}) {
    const [data, setData] = useState<PostData | undefined>();

    useEffect(() => {
        async function load() {
            const uri = serializeLink(contentURI);
            const resp = await fetch(uri);
            const metadata = await resp.json();
            const parsed = parseMetadata(metadata);
            setData(parsed);
            console.log({parsed});
        }
        load().catch(console.error);
    }, [contentURI]);

    // https://tailwindcomponents.com/component/twitter-card-1
    return (
        <div className="border rounded-m px-5 py-3 mb-3">
            {data ? (
                <>
                    {data.text && <p>{data.text}</p>}
                    {data.img && <img
                        className="my-3 rounded-2xl"
                        src={serializeLink(data.img)}
                        alt="Post"
                    />}
                </>
                ) : <p>Loading...</p>
            }
        </div>
    )
}