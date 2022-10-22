// * https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming)
// * DP가 훨씬 빠름 

// * BFS

const wordBreak = (s, wordDict) => {
  const set = new Set(wordDict);
	// * word dictionary - for O(1) search
  const visited = new Set();
	// * 탐색한 인덱스 저장-> 없어도 되긴 하지만 이미 탐색한 인덱스면 똑같은 결과를 반환할 테니 탐색시간 줄이기 위함
  const q = [0];
	// * 탐색 인덱스 queue

  while (q.length) {
    const start = q.shift();
		// * 해당 인덱스를 방문한 적이 있는지 확인
    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
				// * Dictionary에 해당 substring이 있는지 확인
        if (set.has(s.slice(start, end))) {
					// * 이전까지의 값이 모두 substring 존재 + end가 문자열의 끝인덱스를 가리킴 -> true
          if (end === s.length) return true;
					// * 아직 s.length는 아니지만 dictionary에 존재할 경우 bfs queue에 넣어둠 
					// * 0부터 끝까지 탐색하므로 만약 처음부터 substring이 존재하지 않으면 queue엔 값이 없음
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};

// * DP

const wordBreak2 = (s, wordDict) => {
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
	// * true와 true 사이엔 dict안에 있는 word가 존재함 
	// * 뒤 단어가 있더라도 해당 단어를 연결해주는 true가 없으면 연결되지 않는 단어들 
	// * dp의 마지막 배열이 true가 되면 앞 단어들은 다 연결이 돼 있다는 뜻

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
			// * 이전에 이어주는 단어가 있고, 현재 단어도 dict에 있을 때 
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
