## Responsivity

TODO: copy paste from my notes - rewrite to cleaner explanation and to EN

USE

Declare brakpoints in descanding order XL L M ...

${(props) => props.theme.breakpoint.M} {
font-size: 20px;
padding-left: 20px;
color: green;
text-decoration: underline;
}

Vyrobi se hlavička media query a při použití se { } vytvoří tělo media query

- je schopno brát hodnoty jako hodnoty a ne stringy a to je super
- nepotřebuje žádný import
