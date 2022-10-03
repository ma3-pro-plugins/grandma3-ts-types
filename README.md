# grandMA3 types for TypeScriptToLua

:warning: **OPEN ALPHA** &rarr; as there is no official API reference from MAlighting avaliable type declarations may be faulty or incomplete.

TypeScript definitions for grandMA3 Lua API.

## install for production
```bash
npm install -D grandMA3-tstl-plugin
```

## install for development

```bash
git clone https://github.com/LightYourWay/grandMA3-types.git && \
cd <your-plugin-folder> && \
npm link ../grandMA3-types
```

## integrate into `tsconfig.json`

```json
{
	"compilerOptions": {
		"types": ["grandMA3-types"]
	}
}
```

## developers

If you have something to contribute / add to the type declarations - **AWESOME** :tada: feel free to create a **GitHub Issue** for it.
