// 1: 4-44 を写経する
// 2: 無事に実行出来る事を確認する
// 3: GitHub にアップロードする(git add, git commit -m "コミットメッセージ", git push)
// 4: 教科書を読みながら、これがどういう動作をしているのかを調べる

// 1': 再帰呼び出しを使わないで、同様の処理に書き直してみる
// 2': そのコードを GitHub にアップロードする

function factorial (n) {
  let answer = 1;
  for (let i = 0; i < n; i++) {
    answer *= (n - i);
  }

  return answer;
}

console.log (factorial (5));
