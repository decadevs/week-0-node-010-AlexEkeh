let noOfWashes = 2;
 let cleanPile = [1, 2, 1, 1];
 let dirtyPile = [1, 4, 3, 2, 4];

  function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    let result = 0;
    let clean = new Array(51);
    let dirty = new Array(51);
    let noOfWashes;

    for(let c of cleanPile)
        clean[c]++;

    for(let d of dirtyPile)
        dirty[d]++;

    for(let i = 1; i < 51; ++i)
    {
        result += clean[i] / 2;

        if (clean[i] % 2 != 0 && noOfWashes > 0 && dirty[i] > 0)
        {
            result++;
            noOfWashes--;
            dirty[i]--;
        }
    }

    for (let j = 1; noOfWashes > 1 && i<51; ++i)
    {
        if (dirty[j] >=2)
        {
            dirty[j] = Math.min((dirty[j]/2), (noOfWashes/2));
            result += dirty[i];
            noOfWashes -= 2 * dirty[i];
        }
    }
    return result;
  }


  console.log(getMaxPairs(2, [1,2,1,1], [1,4,3,2,4]));
