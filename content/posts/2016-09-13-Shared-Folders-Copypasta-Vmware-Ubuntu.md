---
date: 2016-09-13
draft: false
title: "Shared Folders and Copy/Paste with VMware and Ubuntu"
---
I don't know why shared folders and copy/paste are so difficult to get working with Ubuntu in a VMware virtual machine, but I just went through figuring it out for the nth time and decided to make this post so I won't have to do it again. This method came from an [askubuntu thread](http://askubuntu.com/questions/691585/copy-paste-and-dragdrop-not-working-in-vmware-machine-with-ubuntu) which I am copying here so I don't have to find that thread again.

Starting with neither open-vm-tools or VMware Tools installed perform the following steps:

1. Install VMware Tools by following the usual method (Virtual Machine --> Reinstall VMWare Tools)
2. Reboot the VM
3. sudo apt-get install open-vm-tools-desktop
4. Reboot the VM, after the reboot copy/paste and drag/drop will work!

Pretty easy once you know the magical sequence to use!