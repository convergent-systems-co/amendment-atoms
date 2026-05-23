# amendment-atoms

> Amendments to specifications and constitutional documents — typed proposal, ratification, revocation, and effective-date primitives. The change-control vocabulary the rest of the ecosystem composes against.

`amendment-atoms` is a `*-Atoms` catalog in the [Convergent Systems](https://convergent-systems.co) ecosystem. It defines what exists in its domain — typed, versioned, machine-readable, composable, and open — so runtimes (and humans) can stand on shared infrastructure instead of reinventing it.

Catalogs with constitutions (`constitution-atoms`, `policy-atoms`, `schema-atoms`) consume amendment atoms to evolve their published documents under a sanctioned, signed, auditable lineage.

This catalog is one of the two catalogs flagged in Atom Spec v1.1.0 Part XIII for Docker-image distribution to support private deployments.

## Structure

```
amendment-atoms/
├── ATOMS.yml              # Catalog manifest (atoms-spec/v1.1.0)
├── amendments/            # Compositions assembled from atoms
├── atoms/                 # Reusable building blocks
├── governance/            # Governance atoms (reserved namespace, v1.1.0)
├── keys/                  # Catalog-scoped signing keys (reserved namespace, v1.1.0)
├── rules/                 # Typed constraint vocabulary
├── schemas/               # Catalog-specific JSON Schemas
├── exports/               # CI-generated machine-readable exports
└── docs/                  # Human-readable documentation
```

### Atom types

- `proposal` — A proposed change to a target document, with motivation and diff.
- `ratification` — A signed approval of a proposal, contributing toward the quorum required by the target document's signing rule.
- `revocation` — A signed withdrawal of a previously ratified amendment.
- `effective-date` — The signed declaration that a ratified amendment takes effect at a stated time.

### Runtime consumers

`aish`, `olympus`

## How to consume

Machine-readable exports are published in [`exports/`](./exports/) on every release:

- `exports/manifest.json` — lightweight discovery (name, version, counts)
- `exports/catalog.json` — full catalog dump (every atom, composition, rule)

Exports are deterministic, signed, and versioned. See [`ATOMS.yml`](./ATOMS.yml) for the manifest and the conformance spec (`atoms-spec/v1.1.0`).

## How to contribute

1. Read [`ATOMS.yml`](./ATOMS.yml) to understand the catalog's atom types, compositions, and rules.
2. Add a new atom under `atoms/<type>/` or a composition under `amendments/<name>/`.
3. Open a PR. CI validates the schema, references, and exports.
4. Larger structural changes go through the [XAIP process](https://github.com/convergent-systems-co/xaips).

## Ecosystem

- **Federation:** [convergent-systems.co](https://convergent-systems.co) · [github.com/convergent-systems-co/xdao](https://github.com/convergent-systems-co/xdao)
- **Spec:** [github.com/convergent-systems-co/atoms-spec](https://github.com/convergent-systems-co/atoms-spec) (`atoms-spec/v1.1.0`)
- **Tools:** [github.com/convergent-systems-co/atoms-tools](https://github.com/convergent-systems-co/atoms-tools)
- **Umbrella:** [github.com/convergent-systems-co/atoms](https://github.com/convergent-systems-co/atoms) — all catalogs as submodules
- **Other catalogs:** brand-atoms, service-atoms, prompt-atoms, policy-atoms, identity-atoms, compliance-atoms, workflow-atoms, agent-atoms, knowledge-atoms, event-atoms, plugin-atoms, constitution-atoms

## Licensing

Dual-licensed per Atom Spec v1.1.0 Part VII:

- **Code** — Apache-2.0 (see [`LICENSE`](./LICENSE))
- **Data** — CC-BY-4.0 (see [`LICENSE-data`](./LICENSE-data))
