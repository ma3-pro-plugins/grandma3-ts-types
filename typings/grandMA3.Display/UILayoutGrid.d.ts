type UILayoutGrid =
    UIObject &
    UILayoutGridProps & {
        1: ItemCollectRows // Rows
        2: ItemCollectColumns // Columns
    }
    & Obj<any, any>

type UILayoutGridProps = {
    columns: number
    rows: number
}

type ItemCollectColumns = GenericObj & {
    [key: number]: Item
}


type ItemCollectRows = GenericObj & {
    [key: number]: Item
}

type ItemPropsFixed = {
    sizePolicy: "Fixed"
    size: number
}
type ItemPropsStrech = {
    sizePolicy: "Stretch"
    size: number
}
type ItemPropsContent = {
    sizePolicy: "Content"
    size?: number
}
type ItemProps = ItemPropsFixed | ItemPropsStrech | ItemPropsContent
type Item = GenericObj & ItemProps