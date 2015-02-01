// ==UserScript==
// @name        Peetooh
// @namespace   https://2ch.pm/po/
// @include     https://2ch.hk/po*
// @include     http://2ch.hk/po*
// @include     https://2ch.pm/po*
// @include     http://2ch.pm/po*
// @version     1
// @grant       none
// ==/UserScript==

var WHO_ARE_PETOOKHEE = ["Коммунизм", "Социализм"];
var WHO_ARE_KAKAHI = ["Власть", "Патриот", "ЛГБТ"];
var WHO_IS_CHERV_PEEDOR = ["Христианство"];
var WHO_ARE_SVINEE = ["Украина"];

var PEETOHS = [
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAIAAABCwWJuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHsSURBVChTY7iLFdy+fffsmbt37kC5d+9iU3fnzs3JEy7rqd1qabhz5TJEDIu666tXHtfTOB4lcy7N8+7lixBBLOouTZ101F/u/Vbmg006d25ehwhiUXfnxvWHOwvfzBNY6y63wsv0ysalQEGourbVa4ILC1PLMmbPaLt26eLjo70veqXvFCvsDVC4PS0Kqq5wwRKFtAi1kBCDaF/fUNvqcPdrO5Y9ypV7mCl7N1v+Qars3aM7Ga7euMGXVmAZEaTnFibtF19Vad1ZZLy4oWZ2oUNprL1NfGBMvNvJXesYrty4IZWYZ2gVquYSpW8VZBgUEp/lUZJvGNTk4KmfyO4bwuUVdPbKFZC9rjF5pqaBJmaBcu4RYn7RnJGJNm128eXeLnaxjImmtiWZIPcdO3rc1S7A1TrM3jLEzNjfwCLIwCLQrcTIIcabt8JWsc374NnjIHUH9h+KDErLTq5wsQkI90v3cY62NvA1stcIK9PymGh2/PIpoCKQOiBeOG/5rGmL4qJSp02a11jT1VLfk5zi1TnNa0qtHUQREEDD78qVq1u37Jg7a/GJ46fu3Lmztaf7xPxZm3Kzr589C1EAVQcBp06eASoCMk5uWL89K+PMxg0H6usu7dgOTBko6uDgzu3bN8+fv7JvH5R/9y4AQf+HNLJBIxQAAAAASUVORK5CYII=",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAIAAABCwWJuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHsSURBVChTY7hLHACru337zrw5D3Oyby5fAhbEAkDq7k+beNPO7I6m+tmWJogoJgCpu7lq5cmi+EczKk+62l3IyYZInLyya96hhv49hetOTr968xJI3fMrOzavbvxydsujDf1379wBihy5tCtrfXL46linlRF2a0LOXj/OcPfmzVutxWfzfT7vXPthR9/dO7eB6tLWlAWujk7fFOWzPCZhU+jxq9sYbi9Zektb62qi3897Bz/vm/TwwtGTV89qzY52WxaXuTklckNcyMrYHedWg+y93tL0aEruz7v7v55a+HZDxeeDEzcfmWK/Kil3e3LUxvCsbXGHrwDtvXv34ZldXw9P+XZ148vFBT+2Zf7cnvb9yNSXN9bHrskOWZNcsb3o5PXTIHWPLx7+enDivRPt09Z6X18c92NZ5LfNpb9vbVp3fJ7fipT2A5W37twEqQO6/eXOyXuPBm04YVe7NPfA5MivG4o/3Nh3++bF4p1pHUfqgUrA6oDgzp2dZ9c1bswoXB5bNbPw0ent9+/cAAqvPtex9+oaIAOmDgz2ndrSMDtj6cZeKP/u3T1X1p68fhjIQFF3d9+ij5e2P9y/GMq9e/fKrUvXbl8BMhDq7pzZ92Bx8bPFmQ+OrYcKIQEU8+7dvHLv1G4oBxncvQsACG3PG0UO4rwAAAAASUVORK5CYII=",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAIAAABGNLJTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHiSURBVChTbZLfS9tQFID3Jw0dsgninnzdyzbYBopP4sSx+rK+FFHmw0StY/5YTF3p1CVrm7Vq0xpMK6VNZtFEmqTSJe3LZiFltEOZMNvcspveu2qd38u955yPe86Fc6t4hfzxcdjrVRUFx//RZu/OzpwPDS++dLBBP061g22O4xKJ+NLoC35icnOgn376LEwQqHQV285ms5qmgUajbJp/6la1Wo2PjDCPnmREEUktbDudTpfL5UqlYpomvABg7dCfIo8fRr8wSGph24qiyLIMAKjVaqVSqW5dxHZDv36KfHxDliUxxbNrw0FyyDAM2858FWanRvkI8WFm8KR0ouvfBIG2gAjAYThEptbvS0xH5POk/fa469XCxJ1itOv34d3T/d4VV8dObNGy5AaQgXWgKbQa7B57/sCeA9pHR/L66hu3qy8wdzvp6RSonh/fOU0Nnp0KMXZlYd7Jf7z3zv0a2+goGAYX3fK+nw743XXrIBFfpam3gcDcZngtxNCFQgFp2G6RSu1l9rcVhRHFDZpehr/EhSbXbQRBEJIkkSSJ43+02aijrusURcGLx+Nppi9ps3O5HDQcDoffb++Jz+eDHVAJcX0SlmVVVU0mk1B1Op35fB4Xmtw8NwSuA2yFA0Sx+BeXgzUwSQbT6QAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAiBJREFUOE9juHv37pMnT27t231926ZHDx8CufgBSMOlLetX2ausNRc/3NcGEUUG9+/fB5r48B6IAeQyPAWCewd31DrtitI8MhVFw/37926eO3Vp+bRNMRYnZrU+evgAKAjScH7D0oVKnEvVuXYm2UGMAau+f7AucVOg5u5gjV3BGkDGrrrku1cvgpz04Patecqcq22lt0TpPLh9E6Lh5omDq0I01odobgpQ3xaksSnJcWe6y93zx0Ea7l0+BzQDiFZH617esBBo55Mnj/c3puzINN4OFt8epLEq0Xlnffr1fZtAGq7v37IzWGNzoPq6YI01ARo7cx3PNDueq7PbAVa9wV99a4rT1gyPO0d3v3v5DKThyt6N29IMDnRZ7s43PNxmeXiizZPdPg9nehzJM9kZrL7MT+vY9MZbZ4/dungOaDlIw8Nblx/P8Li1w/3r5cDv14P+3w39dzfs+grXV3N9DmYYb0x1vbh7IzwwQBqAnEdrS56s9bm7y+sfSDUIPTvod3+G5+FGn3M7NgDDF6IaCEAagAAo9GBTPVDFkzVeT7Z531vo+XiW583jm29fuwA3GwKgGoAAKHH/6OqbPS43+lwudzjeWVGKbDAcIDQAAVDLtd3rtsYYbg43vHPtMlQUFaBoAAJgsrl8tOfu2U3AAIEKoQJUJ929duviioenEt6/vktYA9Dsp4+uXTkx6+mtxS/u73jy+DFUAhncvQsA6NMt3do4qPAAAAAASUVORK5CYII=",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAlBJREFUOE9juIsNPHn48O3502+uXHzy5AlUCAyePn2KruH+/fv39u64mRFx10zujrXy7dkTH0BlQAC7hjtTuu4bSpywkVziqnG9IvjxA4QWLBqAACh682rOkRDZ5S2ux7eFPX78CCqBS8OjR3fevJG5tkPqbKDWvf3rgYqgEhANQHzl+t15G04XTdwzd8Ppw2euP3x45v07mbevZc6lyp1JCvz69StQzYO7Nx8/vPfk3jWGDQeuGSSvNkhaFRDe7hveZZi43K503ZJj/u/fyrx/J3tqV/i5m4/fv3p9Y1XKxQURJ7fNYPAoWqufvHq+g/MtC/nbFvItEbG8y+7yrHwwb3ny5X3m2yZG+9ZsLSzYcKEv/tHyoCdX9zHYZK30C20DKr2YpHao01R7+gbeFQ/4ZpyWm3LKqnlPT84S7vlXJOZd3VQ79+Hty0DnMeT3704OKL1oI3d9mrFmV6lEzRLelQ8y8jcta66aM69Ia8IxpSVXNt14CgxuqKfv3Hs4Ob/uorPClom2CnVNajlr5SYcXVtc/Xxl0MNlgQmzp+mtvg6Pb5AGIHX/7p1L3eWnJ1tkLJ5f0Lu1espm+/Z1jbOaNk6PjulsNJ1z7MrdhygagABo46O71z5/+vjv398HvfMfmEXctIy4YB111yTsXs8coDqIMoQGCHjy+PG5fYtPreg8WZj84tjpF4dOXkzLOTu39cyueffugRSga7h3986Vkztvn91x88xWoNy7d++unztwfd+Mq2f23L93G+iK9+/fY0kaQAAJE2QSAp4+fQoAKt0m/9Kje4wAAAAASUVORK5CYII=",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAjFJREFUOE9lkd1r02AUxtN0RTdw7MI69MKh+wumDj92o4huguKlA71wdHN4Nb0QC9sQZVNk1A5vBPFirliKuFZF/KwdZdCktt2a5btpU5qky1C7Qqus0EQ8a8La6sPJy/vx/M775hwk06xsNgujsLKSEQRj5x81AeAOnR3APR6568Cnq0Ns8Cvhdgs8bx7X1ATkcrnV3Xt0BP2DoDBCaAi6eP4CjeE8RRueOiCKInmwW7NsuRsDmKoFZeydorj12jogSdLyrnYjPQRMNi3W7eW61RaamlYUxQTEdJo93AvJfqMt7NHj9JXLjHs2PHbz+47WbZ47018H6HAY7t1Erel5T1XTRI7OpTlN14jAa3lnm2S1JS8NijWnCcQ/vlqytxMOR7lcpnwufuJUauIkE1zQdP2lz6eqaj6fN5wIzOCiz64b3jujS8/uVyqV0O1zbx9P+kb6lh8M6rqeSCRKpRJ4jBYh8K+FQuHNw7Hnc3Pjt4YliVp8MukP+K8PD5Hjp7VqNZlMggesJgAf5Hj/yPX07j2vtycS6Z6dGnU6ncd6j5AfvDzP+/3+YrEI7joQxXHV3rnW0UES7+bdFyn8xc9YbL3nkLS/S00k4vE4y7JgM1QDolGaosjot9jMzI8WG9Y/IH8J5k70KSPXfm1sUBRFEIThBplVAglYBDoFJU+1ttEMw3FsSkjBPoZhxmMMNQAkye3dB93IOByKAsUz1egG1QGQwDCrCwFZls31/8pk/gIqBRsMlkjrVQAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAIAAABCwWJuAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYNJREFUKFNjuIsXHJs04Vhd9bVD+wmoWzu5Y4eL9bXtq3Gqu37t2tLFMxe25m3XUruyZg12dTduXJ8yqbOzKW9KbcylHduBIgyrVixva27Yt3cPRAUELJ4/vaEiraUmra06BSLCMH3KZDszs8jwqA0b1kOENm3akpGSUJgZV5wd0VGdDhFkiAsPtTExCfQLyUxNmzRh8uLFS3NycrKy0pJiQsKD/SZ3NELVdbQ0O1qYe7m4ZWelNzc2NNSVd7bVz5vVV1WWlRwbvXbFEqi6K1cuu9iaO1ubtDbktdXnFGYnF+bmlOUnhXrbF6TEXr54DqoOiNetXhUdHBAd5FiZH+bmYGNlbGSmpxkd4Llu+SKIIiCAhsvt27e3bFzv52KpqSjvYGbsZW8+ta/97p07EFkgQAm/1UsXmuuoBro7lqTHnj97GioKBijq7ty5s3DWZB8744kwb8IBenzcvn1rVlXclUvnoXwYQFcHBBe2Tb5zgwh1mxZOuX1206NH96B8ILh7FwARPrFVe2D5wAAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAfVJREFUOE9tkUuP0mAUhvt7jHFn4tLf4cqfoHFh4o5xI4shjiTVIExIZVEUyjDQLmyZScGhUGpoBibQlgKhhHAJyQyQQMLNtxfHy8yz+nrO+37fOW8J0zSVi4tm/QqHe6nX69lMVhCEXq+HT0JOn6pPnn779Lnd7riKWzqdTrFYbLfbLMtS1BeSJFutFnH88nn+4YN+IskwDHqe1kGSJK3ZDBweJhKJvCh2u128Rhi6Jj16fMUL6826VCp5WtOEWRRFSP1+fywWK+TzhmGgbu8g8Px2s93v9zzPYwxHb1Yqlfl8nslkfD5fNBrVNM2t2wZcvNvtYFitVqlUqt/vo0hR1GazGY1GoVBIlmVHbEOgjaehdplMJjRNy2V5uVxut1t0g8HgR5L05DAMBoNarebJHRBfoVBYr9e4HiF8pePY1ZPDYFkWsoNuOp1iBoAzZmMz2fOz87cHB/F43NM62DuUy+XFYoEZOI47PUmrqqooClJmksyHo6NqtepKXWwDksHeZ7nc7GZ2c32N+Mbj8Ww2+zu0W2yDi67rkUjksnaJxIbDYTgc/u8/uvwxAKtvBd48w8Y5gb9XDTwD2hzHRt+/jgZeGFpDEtNu/S6eAbMirp9KRSqVvtPvVOWHW7/LPyMh7xMmGQm8MnTdK/0GNzYaDdM0fwEYl3epSuU5DQAAAABJRU5ErkJggg=="
];

var CHERV_PEEDOR = [
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAIAAACtAwlQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHESURBVChTVc/bThpBAMbxPor3fYAmJl41TWpsY7RYW01KloPU1JTlsDWR5bxCE3ApUNSoa9bsyaKypMEEG7CSagOFQTwgyG7fpTMdWsI/czXf72Lmwe+/dZo/m4XNRj7ROuG713V8+T+E7mrlhuyvK14g0ZciDZTAHTjHMw6hRjYGZG8DHonGp3YYwzMOIZBLAMlbl9EMRLou0lXB2+u0sYAhdPGFbSlMa/8jZ3/OzI4eRS1nOx/Ku3EsYAhF7MaoaeJ0Y8X/6vG7J2OFtfff0uQB9VrXegMkrSftT8d/pKgKu3ye8FW3aTVqOd2msIAhdFWtnLFUOe4sBBYA7ytlHPthY5HzYAFDqHffLSbdqt9aIOdVz5uvqSXeP6+ETbquDRCsdMhlnj3aejhyHDYdxN9+dhl439z9vw/2kab1jlinGrGpLLkXtqQcMxn3i1+VIl77CPY9t5sNmbORRX51Ie1++YmcLgpreBqg2ysghwglaBEY68bKXMIxJYTMuoaeNUCw3LpHDBDSqm0nSCRdhoxrulrKw/shVFI5KUDIjI1nrGlqhrVPCoyp074ZQtfNmhAixKBZiCxu0sa0czZFTuW56B96GYsujgsyjAAAAABJRU5ErkJggg=="
];
	
var KAKAHI = [
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAIAAACUZLgLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAInSURBVDhPbVJbTxNhEN1fQigES9kiBYUKFrpoxAduVUkabauttRCjhQcJMVUeqCH6ADGRNK1FNooJIgmxcetbm1R46Ta932/ff/Fsv82yIU5OptOZOXPmm5YhKms0GnJESLlcjsViCNrttjpPTaJVKhXUEBQKhU5SslqtZr015nUsVavVbDYrZwkpFovwshol5HI5+FKp1MmRTa9nZVq/u72Vz+cTiQSqrVYLW6Ak0er1OmYjoKl4PA6fyWTsnAG0t14PrcLodGwn0bAhlVYMU9ecVnCemdmDUEDOEgJZeOwsL5lOp+GxxsnxER8Ovny4CMIyp1/gbvz8cRQVBNqG/bEaXivTqL2yW6BAAc7dwS6PmUXsNg/sf9pFA6anUikEDKiRSAQRxjhNOsp5YtKBA0H6FXjndaEHS8qXVI6eTCaXpo2LIz1zhu5713oVAuDhWL9vo9lsoo3emcFZ8BHYef9oXOuc1D2dGlATgGWOndF3OSb6H98xnp/9lRRAw3HxJ3DNjF3qBvA8y0jP7FA31Gjmo/8Nzi4IgnQSnPv1c6dtQuu42Q/NB9d754c1FG6VuG3q6u9fp7KaKCZX7fcto1fwJGBhWAOy0koB2TmDZtagsd8e9W+s4XiM74X7UpMaGAECgN9ASe7tfGC2feuuyYsUDmAb10JzvtNtNfYpJQqbiT09OZbe9icaPeS/hAN7fDgU/hwKBYPfDvYP+f/g+1deFEVCyD/OzeXOmbm8hQAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAHYSURBVDhPY7iLA6xbtw7KQgXYNZw9e9bHUff69etQPhJA1wBUOrGnsSrTLTfa8tatW1BRJICi4dq1a0VJLnPqXec0uObFWnZ3th87dgwqBwMoGjZv3lSeaDq33hWIgNpmVDtnhRu2tjRBpcEAoQHogKRwx9RgveQA7cZMC6CGuQ1uQKtcrDWgKsAAoWHz5s2FMUZz693mNgCdBCRBaEaNi6GmVG93O9w/UA0rli8tjDNPCtCZVO4AVuo6s9alIsk0xltzcoVje75Nbk4WRCVIw507dzLj3IHqZte5FMUa50UaZEfoZ4Xqt+fZAJ0EEq93sTTVvXD+PEjD4cOHU2O8Ijw1oI4GkSAGHAH1lCWYFkQbudoZAmOGISIsCBga3YV2UV4aHfk2aKqnVDqlh+hBgq4q2WzOnDkM8ZEBEEVAs6tTzDND9TPD9HMjDYAOy48yBDKAnoFobs217uvrZaiuqmzJtoIIQVE9OO7Q3eYa7Kp18uRJBqCzEqJD6tItkeTQ0Zx6lzhfrcaGBkQoTZwwIdTHJs5HqyTOuDbNvCPPBuirpizLknjjQGc1bxerhQsXAlVCNUAAUNuOHds7OtqLi4uqq6tbWlp6eno2btx4+fIlqAoguHsXAFfYyJUQwn1XAAAAAElFTkSuQmCC",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAI6SURBVDhPbdJrUxJRGMDxPlJvelWTZkEqUqGwJrIKKHdBdriseAEVEDMSg4RchmQEdWHRwUVhAIkG1gYBzQYHjcHvEsWZwW36v9tznt/MnjnnwR294mnygvoGPv7Xv8CjHArI+8nN5WazCZbo0cDtTd0OPfXLe2MaVgZbA6v0aODnRdU+9PjYwMtbxhPawfMkATbu1QGNX7chk9LGekTqeOkFmNQPpTcXwd69OiB7EMFGe4LjTALhnVqlUR0UUr46ciCNmzqY+FsHJPFdpOuhj//ML3oRUgxsiRgnhpFji7CSov0YAOnPH3AlB1dzCAQKyNhR7XB6TkCtSjJLcMIiKSdjzUajPfkHXF9derlPjlSclGm0uqGlVhUll6bySV9YkbQOExT3kkZ+1qGtX1UB2HfavDBzR9J3OgcXHarCu6myG6140IQBiigHMJjxdXEyvTCW81oBCC6bljhdK9xuTPQyKGdvS1kJ8wQxDX0RMly87sy8kFqbyixN7OhhAOrXtS2DIjrFjWigrFmYtyvCau4BKshaJs6c6orHcO5Gc5bJk/UZAFolPfaUEc6ZRXmb7NyFlDd0lY+6H76ZS2z+u1ufsSuIGX6BxAGo1WpWjRQTM3E1G9dyErP8GDocR98ezgriZnHcIsRUb+wy6IyiAGi9s/39PSPMQXgM42DPe0GPa+y5X97vk/Ztq9lOMVs18np6WlMsFgFoVyqVSJIkiNhueCfgx8Le9aBnbS/gPYwRrdFG+x7u7n4DOmj8XeiW5BEAAAAASUVORK5CYII=",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAIAAABiEdh4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAIpSURBVChTY7hLIkDRcOf27b0bVy3sqJhUkjy1PH3lxJbDOzZB5WAAoeHs8SMtCf6FdkpFjur5TrrpViqFTrolTjoTcqMvnz8HVQTXsH/r+mJP3QI7lSIn7UInnUxbdR8V0VAtsTxrlRInrYZo96uXLkJUgjTcuH6tzNe4wkO7yEWz2EU9Tl/KQojDT1U0x1K+yEGj2tuk2Eln5fRehIYVsyalmcnmOWo4S3Enmcrm2ygW2KmVOqlWuOmUuenm2anEawpMrSlEaKhLDs40k0k3krAR4bCX5EswkE43lYnWk4jUk0g0kIzUEPKS4m7OTbt9+zZUQ7G/XYqJZKGVZLaBcISWqI0oj4UAq7M4p40Im4UAi70wW6SaQK6lwopJHVANKY4GcQYSacaSRfbKlU5K+RayydoCSTrC2abSmcbSOaYyZXYqxTbKM6rzoRrqUqNDNIRC1QSTzRSLHHWLnbSKnTSKbFVKnTQKbZWKbJVzzGSS9ES3rlwM1bBl9XIvDdEANUE/BQE/JVEfZWE/FbF4A+kkY7l4PYkIFd5oLdGG1CigSqiGO3fu1GTEeygIesjzu8rw+ioLARkByoI+cjzecryBqqLpPg6XYHEH0gAEN25czwrzdVEWdVHgc5HhdZEVcJHhByIvNYnSpMhzZ05BlAEBVAMQXLl8qa+jxd/J2lZL0VZD1tVQLTXEe96U/hvXr0NVgAFCAxzcvHnj8uVLN27cgPKRwd27APQqbPJc4Ze8AAAAAElFTkSuQmCC"
];

var SVINEE = [
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAIAAABiEdh4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAIbSURBVChThZHZb9pAEMb9n6dtDq6EAKUYjMHGYFhYh3DYVY8o5IFWlRIpgTYsNjYhnMHGBEgTzFvXNX1qpY5G8lr7/WbmmyWadGwIc51mU/tfdOp1RRIJGYKNKJh5Tjk/3978FZ3b28HnDz9L+T7IEBrgLQluJOGRZ9r/YpSbmzHP4qJYMynwRD8ZsyT7Z8ZSI5ZWFWUr/BMDARh0xNHo6QRxFz5eVwq4gJGIPp/mtKLQPxX0bEpPM/cnhXat9lICEzKE1TgNmiTkOKXTpFWF40hoU4WWaKdzbYnCcxngcg/RMD4vYXpAkUTz46cpTfZ8bvXVzhJmdCqCza1KAOeUiw/JENapu2/6R95ljm1BSCCE5PpXrVIyAdel3nXjkWGOGWWZToJEsfA314HOM4sc2+PTqFjUVNUGsDP1orYu5ycJ0kgnVpCfstQsy84BO+OTTye8VSlo7yVnBzagtmUDcPbceOgSmKeoB7974vcsONoxg/MRcMr19RbA67eqBcel5tnXjz1m+NAMeY2AZxQJ2juUhLUoKL+b2AA6O3MA3OHO55oFvatoYBELmGGfdrDndMALlEVxC3RaLZ1LOm+JnQzc+6O91+ND1/3uzhPMOIDJ0fLl1RbAH7lWwwx+gZdK3kjGeh7XOOifpeIYwHPOeUaulLHMBhqNhj0VQj8ur1oC7GY5+W1QPvLJfl/r0KtmGATz3+tfHA1C6Bdm0Sb1aChPpgAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAIAAADkharWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAIRSURBVChTY7iLB9y5c/vWrRtXr928fh0qcvcuuobLF85fPXbk9pED17dveHx47/NjR54dOfrsxLHb58/v37UTqABZw50LR09c2b793ualt1ZOubNy6uNNsx+tnXFr6ZST09penzl2dfd2oCKEhkuHDp9fPOfcogl3Vk26t7L32uymW7Obbs+o31adtrwwYW9X2dnV825fvwrVcPX8heurVp2Z1ntoYv3lmY3XZ1Wf6S260l9+tiW/Jdwt28t+alrEtOrSq6ePMlw4e2bD4kXLOtrv7zuwrbZwfn7k7qqkI03pa3PD9pQl7SlOmBDnZ66jEe9sV5+dDjSa4fr1a6X5eaG2FstqS/Z3VKQ5G81O9p0S7ZbrbNId7LQhO7ox1MPRUDfRxWH+jGkgDWAX3W1MjjzcV3Nz8cRoR7NpyX7ZbhaOelrOBtphVsbeZgZeTo7p3q6QwAVpOLN724lpLRtr0lZUpvl5uDbG+h7bunbzpk1zZ89eOG/+8WPHli9ZnOXncuvGDaiG7vLi7gS/qrTY86dOzJwxLdXb4dq5k0BxODh48ECqv8fNm2AN165cvnDh7IF9ey5dOHfq5LGOxqpUP6dpPU11ZTnVBWmddaX1pbkxYYEutuYpsWGXLp5j2Lpx1cK5k1Ytmb147tTZ03om9rR2ttT3dTZN7euY1t8xqau1u72psaG+ubmhu6v9ypXLAHjccYNTi08PAAAAAElFTkSuQmCC",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAIAAAAy3EnLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAGjSURBVChTXZBLTxpRGIb5g/6DdmfShbu2K5uurI2JjYbQIlZLqDgRMhQv01FEZMrNEebGDDNnLofvnJlBrYRCvHTVlRBZaJ/l8+bZvBF4AiUQUHLp+31KRgG57ZG7EG4CPPK9AfFCQ6Gd9iTwVfnec4ZycyTWb3X1L8U3GA0tbWCp/Y78WxUvpGrQKF63z3quNQn6FP5d+GF8NYxHg/zOsKNea+eXUj1sCoF42v3FY4GzfmaowIVSeRLcm1prdfmKSemfFtVUYqCd984Ecsq7pV10nDM5Rv+RlLdizsG2U8hEwrZyVyuNmg3g9wwmSQ/zfxSRCkd2IS9nv2q73+RsvLG53Fpf0jMJnUtH7LWYHF0y84x5mDPZlPR5sf7h9dUJh/YzdrXoqBK2kdtpb829qMUWrCIbAYzHCjx3chOAozSTL2egzKP9HWLpj3KMUuRzb2Y1duPZrWO6hnbycd5Hhp7+ArY5tQCeY2ffvkIc83+AK6X69wTBnpFc6TpoagGQprDv5uR09FmAXaeS3jRaoilWyivvXdOYDgBSVWgVDmrs9gMacHk1FnkTkAAAAABJRU5ErkJggg==",
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAIAAAAy3EnLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAEuSURBVChTlZHLT4NAEMb51715UNMYoybFpjyqtWALVlsM9EVZkJYujwJdlqDeTTTpwahcXKxJ28RLJ5PJl5nvl53MUtmOsQbM0VBpikBqPKlyIF/12LLC0a7WTcAge9QdVZmYJsaYStOUuElVb65b5bM3CPLE/TctSfQhpOIosof9Z0N7dcak+7mY5YmXY3/TuspBrWJbFuV7LhjrPfoICtUczT4ipxhvAO/QKASCuljvK51ipcD3nYkNum2zVg5b/BeCy9j9RnAFvPTaRC89S+AYsvzWlRZxPO3cwuYlv79nNxh8LwD2XD45jB/kzsWpCQDxbANBMNcUiWO7svTX+g17NDTqTBSGRK8BcrI7np0Ao1I6mE2nGCdxGCYIJWjRqtKV4xJ5n9h2/Lgs+wEa/YaIKdqSPQAAAABJRU5ErkJggg=="
];

var TitleMap = Object.create(null);

var observer;

var getHash = function() {
	if(name in this) {
		return this[name];
	}
	var hash = 0;
	for(var i = 0, len = name.length; i < len; ++i) {
		hash = (((hash << 5) - hash) + name.charCodeAt(i)) | 0;
	}
	return this[name] = Math.abs(hash);
}.bind(Object.create(null));

function sortaGovna(el) {
	var icons = el.getElementsByClassName('post-icon');
	for(var i = 0; i < icons.length; ++i) {
		var icon = icons[i];
		if(icon.childElementCount !== 2) {
			continue;
		}
		var img = icon.firstElementChild;
		var title = img.getAttribute('title');
		var info = TitleMap[title];
		if(info) {
			var id = (icon.parentNode.getElementsByClassName('ananimas') || {}).textContent;
			var images = info[0];
			img.src = images[getHash(name || '') % images.length];
			img.title = info[1];
		}
	}
}

function updateThreads() {	
	alert('asd');
	sortaGovna(document.body);
	if(observer) {
		observer.disconnect();
	} else {
		observer = new MutationObserver(function(mutations) {
			for(var i = 0; i < mutations.length; ++i) {
				var newNodes = mutations[i].addedNodes;
				for(var j = 0; j < newNodes.length; ++j) {
					sortaGovna(newNodes[i]);
				}
			}
		});
	}	
	var threads = document.body.getElementsByClassName('thread');
	for(var i = 0; i < threads.length; ++i) {
		observer.observe(threads[i], {childList: true});
	}
}

function init() {
	function addMapItem(title) {
		TitleMap[title] = this;
	}
	WHO_IS_CHERV_PEEDOR.forEach(addMapItem, [CHERV_PEEDOR, 'Червь-пидор']);
	WHO_ARE_KAKAHI.forEach(addMapItem, [KAKAHI, 'Говно какое-то']);
	WHO_ARE_PETOOKHEE.forEach(addMapItem, [PEETOHS, 'Петух']);
	WHO_ARE_SVINEE.forEach(addMapItem, [SVINEE, 'Хохлуту']);
	
	updateThreads();
	new MutationObserver(updateThreads).observe(document.querySelector('.posts > form'), {childList: true});
}

if(document.readyState === 'interactive' || document.readyState === 'complete') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init, false);
}
