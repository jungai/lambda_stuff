## Test it locally before deploy

prepare deps & app

```bash
make
```

use **sam cli** for building function

```bash
sam build -t sam_template.yaml
```

invoke lambda function locally with `sam local`

```bash
sam local invoke
```

if success it will send discord message with `{}`
