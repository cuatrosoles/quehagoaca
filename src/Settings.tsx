import * as React from "react";
import { LayoutType, Photo } from "react-photo-album";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import photos from "./photos";

const useLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;

function Filter({ children }: React.PropsWithChildren) {
    return (
        <Grid item xs={12} sm={8} lg={6}>
            {children}
        </Grid>
    );
}

function SliderControl({
    name,
    min,
    max,
    step,
    value,
    onChange,
    disabled,
}: {
    name: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (event: Event, value: number, activeThumb: number) => void;
    disabled?: boolean;
}) {
    const [focused, setFocused] = React.useState(false);

    return (
        <FormControl margin="none" fullWidth>
            <InputLabel shrink variant="standard" focused={focused}>
                {name}
            </InputLabel>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                disabled={disabled}
                size="small"
                valueLabelDisplay="auto"
                marks={[
                    { value: min, label: `${min}` },
                    { value: max, label: `${max}` },
                ]}
                onChange={(e, value, activeThumb) => onChange(e, typeof value === "number" ? value : value[0], activeThumb)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                sx={{ mt: 2 }}
            />
        </FormControl>
    );
}

export type SettingsProps = {
    photos: Photo[];
    layout: LayoutType;
    targetRowHeight: number;
    columns: number;
    spacing: number;
    padding: number;
    width: number;
};

const SettingsContext = React.createContext<SettingsProps | null>(null);

export function useSettings() {
    const context = React.useContext(SettingsContext);
    if (!context) throw new Error("useSettings must be used within a SettingsContext");
    return context;
}

export default function Settings({ children }: { children: React.ReactNode }) {
    const [layout, setLayout] = React.useState<LayoutType>("rows");
    const [count, setCount] = React.useState(photos.length);
    const [targetRowHeight, setTargetRowHeight] = React.useState(300);
    const [columns, setColumns] = React.useState(5);
    const [spacing, setSpacing] = React.useState(30);
    const [padding, setPadding] = React.useState(10);
    const [width, setWidth] = React.useState(100);

    useLayoutEffect(() => {
        const viewportSize = window.innerWidth;
        setColumns(viewportSize < 480 ? 2 : viewportSize < 900 ? 3 : 5);
        setSpacing(viewportSize < 480 ? 10 : viewportSize < 900 ? 20 : 30);
        setPadding(viewportSize < 480 ? 10 : viewportSize < 900 ? 20 : 30);
        setTargetRowHeight(viewportSize < 480 ? 100 : viewportSize < 900 ? 150 : 200);
    }, []);

    const settings = React.useMemo(
        () => ({
            photos: photos.slice(0, count),
            layout,
            targetRowHeight,
            columns,
            spacing,
            padding,
            width,
        }),
        [layout, count, targetRowHeight, columns, spacing, padding, width],
    );

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
}
