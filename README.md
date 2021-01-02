# grandMA3 types for TypeScriptToLua

TypeScript definitions for grandMA3 Lua API.

## install

```bash
git clone https://github.com/LightYourWay/grandMA3-types.git && \
cd <your-plugin-folder> && \
npm link ../grandMA3-types
```

## integrate into `tsconfig.json`

```json
{
	"compilerOptions": {
		"types": ["grandMA3-types/lua"]
	}
}
```
