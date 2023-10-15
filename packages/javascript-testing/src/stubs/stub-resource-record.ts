import { Record } from "immutable";
import type { StubResource } from "./stub-resource";

class StubResourceRecord
    extends Record({
        id: 0,
        name: "stub",
    })
    implements StubResource {}

export { StubResourceRecord };
