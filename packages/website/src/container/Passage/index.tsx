/*
 * @Description: passage
 * @Author: 张盼宏
 * @Date: 2022-08-27 23:24:29
 * @LastEditors: 张盼宏
 * @LastEditTime: 2022-09-03 19:21:50
 */
import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import Paper from "@mui/material/Paper";

import { usePageConfig, useAsyncFn, useAsyncEffect, useNavigate } from "@/hooks";
import { passage } from '@/service';

import { Tag } from "@/components";
import { Render, Sketch } from './components';
import { traverseAst, generateSketch, Title } from './utils/traverse';
import styles from './style.module.less';

type IPageParam = Record<'path', string | undefined>;

const Passage = () => {
    const { setStates, rate = 0 } = usePageConfig();
    const { path } = useParams<IPageParam>();

    const [fetchPassage, res] = useAsyncFn(passage.passage);
    const [sketch, setSketch] = useState<Title[]>([]);

    const navigator = useNavigate();

    useEffect(() => {
        setStates?.({
            title: res?.data?.catalogue?.title
        });
    }, [setStates, res?.data?.catalogue?.title]);

    useAsyncEffect(async () => {
        if (!path) {
            return;
        }
        const res = await fetchPassage({ path });
        // traverse markdown ast and mark the parent and siblings
        traverseAst(res.data.ast);
        // generate sketch
        const sketch = generateSketch(res.data.ast);
        setSketch(sketch);
    }, [fetchPassage, path]);

    return (
        <div className={styles.passageContainer}>
            <Paper
                className={styles.sketch}
                style={{
                    top: `${155 - 75 * rate}px`
                }}
            >
                <Sketch sketch={sketch}/>
            </Paper>
            <Paper className={styles.passage}>
                <div>
                    {res?.data?.catalogue?.tags?.map(tag => (
                        <Tag key={tag} onClick={() => navigator(`/?tags=${tag}`)}>{tag}</Tag>
                    ))}
                </div>
                {!!res?.data?.ast ? <Render node={res.data.ast}/> : null}
            </Paper>
        </div>
    );
}

export default memo(Passage);