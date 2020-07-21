/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.threads;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

/**
 *
 * @author Vinh Dang
 */
public class BaseThread implements Serializable {

    private List<Thread> threads;

    public BaseThread() {
        threads = new ArrayList<>();
    }

    public void add(Callable<?> func) {
        Thread t = new Thread() {
            @Override
            public void run() {
                try {
                    func.call();
                } catch (Exception e) {
                }
            }

        };
        t.start();
        threads.add(t);
    }

    public void join() throws Exception {
        for (Thread thread : threads) {
            thread.join();
        }
    }
}
