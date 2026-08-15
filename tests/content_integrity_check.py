"""Compare visible prose text between git HEAD version and working tree of page components."""
import re
import subprocess

FILES = subprocess.run(
    ["git", "diff", "--name-only", "--", "frontend/src/pages", "frontend/src/components"],
    cwd="/app", capture_output=True, text=True).stdout.split()


def prose(src: str) -> str:
    # remove JSX tags and attributes, keep text nodes
    src = re.sub(r"<[^>]*>", " ", src)
    src = re.sub(r"\{[^{}]*\}", " ", src)
    src = re.sub(r"\s+", " ", src)
    # keep only sentences with lowercase italian words
    return src.strip()


for f in FILES:
    old = subprocess.run(["git", "show", f"HEAD:{f}"], cwd="/app", capture_output=True, text=True).stdout
    with open("/app/" + f, encoding="utf-8") as fh:
        new = fh.read()
    a, b = prose(old), prose(new)
    if a == b:
        print(f"SAME {f}")
    else:
        # find prose words present in old but missing in new
        aw = re.findall(r"[A-Za-z\u00c0-\u00ff']{3,}", a)
        bw = re.findall(r"[A-Za-z\u00c0-\u00ff']{3,}", b)
        missing = [w for w in aw if w not in bw]
        extra = [w for w in bw if w not in aw]
        print(f"DIFF {f} missing={missing[:20]} extra={extra[:20]}")
