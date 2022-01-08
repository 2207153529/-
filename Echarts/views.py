from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from Echarts.models import HisData, NowData, ProData
import json



def idnex(request):
    if request.method == "GET":
        return render(request, 'index.html')




def data(request):
    hisdata = HisData.objects.all()
    nowdata = NowData.objects.all()
    prodata = ProData.objects.all()
    n = [i for i in nowdata]
    # 现在确诊 无症状 现有疑似病例 现有重症 累计确诊 累计治愈
    xzqz, wzz, xyys, xyzz, ljqz, ljzy = n[0].sure, n[0].wzz, n[0].xyys, n[0].xyzz, n[0].ljqz, n[0].ljzy
    drqz = []   # 用于存放历史当日确诊人数  当日确诊人数 = 当日累计确诊人数 - 前一天累计治愈人数
    ljqzr = []  # 用于存放历史累计确诊人数
    ljzyr = []  # 用于存放历史累计治愈人数
    hisdata = [hdata for hdata in hisdata]
    for hdata in hisdata:
        ljqzr.append(hdata.sure)
        ljzyr.append(hdata.cure)
        index = hisdata.index(hdata)
        drqz.append(hisdata[index].sure - hisdata[index - 1].cure)
    drqz.pop(0)
    pro = [pro.pro for pro in prodata]
    pro_sure = [pro.sure for pro in prodata]
    content = {
        'xzqz': xzqz,
        'wzz': wzz,
        'xyys': xyys,
        'xyzz': xyzz,
        'ljqz': ljqz,
        'ljzy': ljzy,
        'barlist': [xzqz, wzz, xyys, xyzz],
        'drqz': drqz,
        'ljqzr': ljqzr,
        'ljzyr': ljzyr,
        'pro': pro,
        'pro_sure': pro_sure
    }
    return HttpResponse(json.dumps(content, ensure_ascii=False), content_type="application/json,charset=utf-8")